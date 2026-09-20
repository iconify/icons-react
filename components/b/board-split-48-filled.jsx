import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b8tfx4b6s {
  fill: currentColor;
  d: path("M11.25 6A5.25 5.25 0 0 0 6 11.25V23h21V6zM27 25.5H6v11.25C6 39.65 8.35 42 11.25 42H27zM36.75 42H29.5V31.5H42v5.25c0 2.9-2.35 5.25-5.25 5.25M42 19.5V29H29.5v-9.5zm0-2.5H29.5V6h7.25C39.65 6 42 8.35 42 11.25z");
}
</style><path class="b8tfx4b6s"/>`,
		"fallback": "fluent:board-split-48-filled",
	});
}

export default Component;
