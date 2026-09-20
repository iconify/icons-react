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
		"content": `<style>.ou3cbcmdr {
  fill: currentColor;
  d: path("M192 20H96a20 20 0 0 0-20 20v20H64a20 20 0 0 0-20 20v144a12 12 0 0 0 19.32 9.51L108 199.14l44.69 34.37A12 12 0 0 0 172 224v-46.4l20.68 15.91A12 12 0 0 0 212 184V40a20 20 0 0 0-20-20m-44 179.63l-32.69-25.14a12 12 0 0 0-14.63 0L68 199.63V84h80Zm40-40l-16-12.3V80a20 20 0 0 0-20-20h-52V44h88Z");
}
</style><path class="ou3cbcmdr"/>`,
		"fallback": "ph:bookmarks-bold",
	});
}

export default Component;
