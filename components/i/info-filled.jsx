import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.suvk3db8z {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10 18a8 8 0 1 1 0-16a8 8 0 0 1 0 16Zm0-9.071a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1ZM10 7.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z");
}
</style><path clip-rule="evenodd" class="suvk3db8z"/>`,
		"fallback": "pepicons-pop:info-filled",
	});
}

export default Component;
