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
		"content": `<style>.uzptvcbaz {
  fill: currentColor;
  d: path("M35.89 128C52 136.23 52 155.64 52 172c0 24.8 1.35 40 28 40a4 4 0 0 1 0 8c-36 0-36-26.61-36-48c0-24.8-1.35-40-28-40a4 4 0 0 1 0-8c26.65 0 28-15.2 28-40c0-21.39 0-48 36-48a4 4 0 0 1 0 8c-26.65 0-28 15.2-28 40c0 16.36 0 35.77-16.11 44M240 124c-26.65 0-28-15.2-28-40c0-21.39 0-48-36-48a4 4 0 0 0 0 8c26.65 0 28 15.2 28 40c0 16.36 0 35.77 16.11 44C204 136.23 204 155.64 204 172c0 24.8-1.35 40-28 40a4 4 0 0 0 0 8c36 0 36-26.61 36-48c0-24.8 1.35-40 28-40a4 4 0 0 0 0-8");
}
</style><path class="uzptvcbaz"/>`,
		"fallback": "ph:brackets-curly-thin",
	});
}

export default Component;
