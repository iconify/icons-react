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
		"content": `<style>.yy8d1mmxn {
  fill: currentColor;
  d: path("M52 40v176a12 12 0 0 1-24 0V40a12 12 0 0 1 24 0m16 60V64a20 20 0 0 1 20-20h88a20 20 0 0 1 20 20v36a20 20 0 0 1-20 20H88a20 20 0 0 1-20-20m24-4h80V68H92Zm144 60v36a20 20 0 0 1-20 20H88a20 20 0 0 1-20-20v-36a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20m-24 4H92v28h120Z");
}
</style><path class="yy8d1mmxn"/>`,
		"fallback": "ph:align-left-bold",
	});
}

export default Component;
