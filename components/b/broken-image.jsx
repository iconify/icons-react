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
		"content": `<style>.dsudt8rzg {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384v-5.676l2 2l4-4l4 4l4-4l2 2v5.677q0 .69-.462 1.153T18.384 20zm0-16h12.769q.69 0 1.153.463T20 5.616v5.67l-2-2l-4 4l-4-4l-4 4l-2-2v-5.67q0-.691.463-1.153T5.616 4");
}
</style><path class="dsudt8rzg"/>`,
		"fallback": "material-symbols-light:broken-image",
	});
}

export default Component;
