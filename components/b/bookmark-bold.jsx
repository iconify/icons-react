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
		"content": `<style>.xxjdz8b-b {
  fill: currentColor;
  d: path("M184 28H72a20 20 0 0 0-20 20v176a12 12 0 0 0 18.36 10.18l57.63-36l57.65 36A12 12 0 0 0 204 224V48a20 20 0 0 0-20-20m-4 24v102.35l-45.65-28.53a12 12 0 0 0-12.72 0L76 154.35V52Zm-45.65 121.82a12 12 0 0 0-12.72 0L76 202.35v-19.7l52-32.5l52 32.5v19.7Z");
}
</style><path class="xxjdz8b-b"/>`,
		"fallback": "ph:bookmark-bold",
	});
}

export default Component;
