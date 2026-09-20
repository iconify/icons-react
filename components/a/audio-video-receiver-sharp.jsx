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
		"content": `<style>.eu-ckbbus {
  fill: currentColor;
  d: path("M3 15.692V6.116h18v9.576h-2v1.27h-1v-1.27H6v1.27H5v-1.27zm14.682-3.626q.434-.433.434-1.066t-.434-1.066t-1.066-.434t-1.067.434q-.433.433-.433 1.066t.433 1.066t1.067.434t1.066-.434M6.385 12.5h6.461v-3H6.385z");
}
</style><path class="eu-ckbbus"/>`,
		"fallback": "material-symbols-light:audio-video-receiver-sharp",
	});
}

export default Component;
