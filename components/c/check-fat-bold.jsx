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
		"content": `<style>.g13y5q-nc {
  fill: currentColor;
  d: path("m246.15 65.46l-.07-.08l-23.93-23.53a20 20 0 0 0-28.23-.05l-90 88.83l-33.86-32.85a20 20 0 0 0-28.21.08l-24 24a20 20 0 0 0 0 28.26l71.62 72a20 20 0 0 0 28.29 0L246.15 93.74a20 20 0 0 0 0-28.28M103.61 202.33L37.64 136L56 117.61L95.65 156a12 12 0 0 0 16.78-.08L208 61.61l18.32 18Z");
}
</style><path class="g13y5q-nc"/>`,
		"fallback": "ph:check-fat-bold",
	});
}

export default Component;
