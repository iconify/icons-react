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
		"content": `<style>.r1ate1bvy {
  fill: currentColor;
  d: path("M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2s14 6.268 14 14m-12.707 6.707a1 1 0 0 0 1.414-1.414L13.414 16l5.293-5.293a1 1 0 0 0-1.414-1.414l-5.879 5.878l-.028.033l-.073.08a1 1 0 0 0-.293.716c-.003.26.097.484.293.718c.041.05.05.06.1.11h.002z");
}
</style><path class="r1ate1bvy"/>`,
		"fallback": "fluent:chevron-circle-left-32-filled",
	});
}

export default Component;
