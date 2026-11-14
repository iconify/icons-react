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
		"content": `<style>.z_rlkgb5e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v18.5M20.5 3v18.5m-17-15h17m-17 11h17M7.75 6.5v11M12 6.5v11m4.25-11v11");
}
</style><path class="z_rlkgb5e"/>`,
		"fallback": "uix:garden-fence-panel",
	});
}

export default Component;
