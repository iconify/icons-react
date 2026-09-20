import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qgq3m3fbw {
  fill: currentColor;
  d: path("M15.25 2.104a1.25 1.25 0 0 1 1.35.23l7 6.5a1.25 1.25 0 0 1-.018 1.848L17.627 16l5.956 5.318a1.25 1.25 0 0 1 .018 1.848l-7 6.5a1.25 1.25 0 0 1-2.101-.916v-9.958l-4.917 4.39a1.25 1.25 0 1 1-1.666-1.864L13.873 16l-5.956-5.318a1.25 1.25 0 1 1 1.666-1.864l4.917 4.39V3.25c0-.497.295-.947.75-1.146M17 18.792v7.092l3.893-3.616zm0-5.584l3.893-3.476L17 6.117z");
}
</style><path class="qgq3m3fbw"/>`,
		"fallback": "fluent:bluetooth-32-filled",
	});
}

export default Component;
