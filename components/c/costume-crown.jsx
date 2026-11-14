import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k8c6m1irv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.774 18.065l-.924-6.572a1.291 1.291 0 0 1 2.108-1.168l.89.747a1.5 1.5 0 0 0 2.387-.671l.836-2.489a1.5 1.5 0 0 1 2.657-.373l1.489 2.162a1.5 1.5 0 0 0 2.479-.013l.65-.964a1.291 1.291 0 0 1 2.348.542l.924 6.572a1.5 1.5 0 0 1-1.277 1.694L6.468 19.341a1.5 1.5 0 0 1-1.694-1.276m-.279-1.981l15.845-2.227");
}
</style><path class="k8c6m1irv"/>`,
		"fallback": "uix:costume-crown",
	});
}

export default Component;
