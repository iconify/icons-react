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
		"content": `<style>.ctyzpnn4s {
  fill: currentColor;
  d: path("M12 8.5V4h-2v12h6a2 2 0 0 0 2-2v-4h-4.5A1.5 1.5 0 0 1 12 8.5M9 16H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5zm4-7.5V4.058c.242.07.465.2.646.381l3.915 3.915c.181.18.311.404.38.646H13.5a.5.5 0 0 1-.5-.5");
}
</style><path class="ctyzpnn4s"/>`,
		"fallback": "fluent:document-landscape-split-20-filled",
	});
}

export default Component;
