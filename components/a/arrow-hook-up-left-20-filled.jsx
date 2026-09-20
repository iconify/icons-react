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
		"content": `<style>.moyct4bpy {
  fill: currentColor;
  d: path("M6 15.25c0 .414.336.75.75.75h4.5c1.586 0 2.696-.621 3.53-1.588C15.6 13.46 16 12.216 16 11s-.3-2.46-1.12-3.412C14.046 6.621 12.836 6 11.25 6H6.56l2.22-2.22a.75.75 0 0 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 .02 1.08l3.5 3.25a.75.75 0 0 0 1.02-1.1L6.66 7.5h4.59c1.164 0 1.86.441 2.4 1.068c.554.642.85 1.523.85 2.432s-.296 1.79-.85 2.432c-.54.627-1.236 1.068-2.4 1.068h-4.5a.75.75 0 0 0-.75.75");
}
</style><path class="moyct4bpy"/>`,
		"fallback": "fluent:arrow-hook-up-left-20-filled",
	});
}

export default Component;
