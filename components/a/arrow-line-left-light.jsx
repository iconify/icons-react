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
		"content": `<style>.uxuuodbvb {
  fill: currentColor;
  d: path("M230 128a6 6 0 0 1-6 6H86.49l61.75 61.76a6 6 0 1 1-8.48 8.48l-72-72a6 6 0 0 1 0-8.48l72-72a6 6 0 0 1 8.48 8.48L86.49 122H224a6 6 0 0 1 6 6M40 34a6 6 0 0 0-6 6v176a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6");
}
</style><path class="uxuuodbvb"/>`,
		"fallback": "ph:arrow-line-left-light",
	});
}

export default Component;
