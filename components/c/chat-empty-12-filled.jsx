import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gula3vbxz {
  fill: currentColor;
  d: path("M6 1a5 5 0 0 0-4.386 7.403l-.592 1.947a.5.5 0 0 0 .624.624l1.945-.592A5 5 0 1 0 6 1");
}
</style><path class="gula3vbxz"/>`,
		"fallback": "fluent:chat-empty-12-filled",
	});
}

export default Component;
