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
		"content": `<style>.rst03hbuv {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-4.246 3.002-7.248T12 1.75t7.248 3.002T22.25 12t-3.002 7.248T12 22.25t-7.248-3.002T1.75 12M12 5.75Q8.75 5.75 8.75 9q0 1.635.823 2.448Q8.5 12.312 8.5 14.25q0 3.5 3.5 3.5t3.5-3.5q0-1.938-1.073-2.802q.823-.813.823-2.448q0-3.25-3.25-3.25");
}
</style><path class="rst03hbuv"/>`,
		"fallback": "uix-solid:eight-ball",
	});
}

export default Component;
