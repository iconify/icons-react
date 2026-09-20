import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yxbha--rt {
  fill: currentColor;
  d: path("M224.11 31.92a68 68 0 0 0-96.11-.05l-70.12 69.3A19.9 19.9 0 0 0 52 115.31V187l-28.48 28.51a12 12 0 0 0 17 17L69 204h71.7a19.87 19.87 0 0 0 14.15-5.86h.05l69.21-70a68.06 68.06 0 0 0 0-96.22m-79.21 17A44 44 0 0 1 210 108h-45l27.52-27.51a12 12 0 0 0-17-17L124 115V69.54ZM76 117l24-23.72V139l-24 24Zm63 63H93l48-48h45.5Z");
}
</style><path class="yxbha--rt"/>`,
		"fallback": "ph:feather-bold",
	});
}

export default Component;
