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
		"content": `<style>.nl53urg0j {
  fill: currentColor;
  d: path("M14.458 1.666a.5.5 0 1 0-1 0v.833a.5.5 0 0 0 1 0zm3.395 1.187a.5.5 0 0 0-.707-.707l-1.5 1.5a.5.5 0 0 0 .707.707zm-10 10a.5.5 0 1 0-.707-.707l-1 1a.5.5 0 1 0 .707.707zM7 4.999v3.793l-4.292 4.293a2 2 0 0 0 0 2.829l1.379 1.378a2 2 0 0 0 2.828 0L11.207 13h3.792a.5.5 0 0 0 .354-.146l1.44-1.44a2 2 0 0 0 0-2.828l-5.38-5.379a2 2 0 0 0-2.828 0l-1.44 1.44A.5.5 0 0 0 7 4.999m2.293-1.085a1 1 0 0 1 1.415 0l5.378 5.378a1 1 0 0 1 0 1.415L15 11.792L8.208 5zM8 6.206L13.792 12h-2.585L7.999 8.792zm-.5 3.5l2.794 2.793l-4.086 4.086a1 1 0 0 1-1.414 0l-1.379-1.378a1 1 0 0 1 0-1.415zm10-4.165a.5.5 0 1 0 0 1h.834a.5.5 0 1 0 0-1z");
}
</style><path class="nl53urg0j"/>`,
		"fallback": "fluent:flashlight-20-regular",
	});
}

export default Component;
