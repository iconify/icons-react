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
		"content": `<style>.pj-6k8b4w {
  fill: currentColor;
  d: path("M11.5 2A2.5 2.5 0 0 0 9 4.5v6.41l-1.495-.574a4.34 4.34 0 0 0-5.382 1.996a1.053 1.053 0 0 0 .512 1.463c5.662 2.456 7.454 4.673 8.19 6.29c.526 1.156 1.73 2.104 3.172 1.882l3.455-.533a2.75 2.75 0 0 0 2.25-2.054l1.153-4.633a4.75 4.75 0 0 0-3.872-5.839L14 8.44V4.5A2.5 2.5 0 0 0 11.5 2");
}
</style><path class="pj-6k8b4w"/>`,
		"fallback": "fluent:hand-point-24-filled",
	});
}

export default Component;
