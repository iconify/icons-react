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
		"content": `<style>.d-o94abqa {
  fill: currentColor;
  d: path("M13 3v8h2c1.348.001 2.357 1.478 2.894 2.553l2 4c.181.356.274.75.273 1.149C20.164 19.924 19.265 21 18 21h-3v-4a1 1 0 0 0-2 0v4h-2v-4a1 1 0 0 0-2 0v4H6c-1.265 0-2.164-1.076-2.167-2.298a2.5 2.5 0 0 1 .273-1.149l2-4C6.643 12.478 7.652 11.001 9 11h2V3a1 1 0 0 1 2 0");
}
</style><path class="d-o94abqa"/>`,
		"fallback": "coolicons:broom-fill-round",
	});
}

export default Component;
