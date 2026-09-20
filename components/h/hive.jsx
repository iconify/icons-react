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
		"content": `<style>.g81e20bcj {
  fill: currentColor;
  d: path("m16.275 11.5l-1.7-3l1.7-3h3.35l1.7 3l-1.7 3zm-5.95 3.5l-1.7-3l1.7-3h3.35l1.7 3l-1.7 3zm0-7l-1.7-3l1.7-3h3.35l1.7 3l-1.7 3zm-5.95 3.5l-1.7-3l1.7-3h3.35l1.625 3l-1.625 3zm0 7l-1.7-3l1.7-3h3.35l1.625 3l-1.625 3zm6.05 3.5l-1.8-3l1.7-3h3.35l1.7 3l-1.7 3zm5.85-3.5l-1.7-3l1.7-3h3.35l1.7 3l-1.7 3z");
}
</style><path class="g81e20bcj"/>`,
		"fallback": "material-symbols:hive",
	});
}

export default Component;
