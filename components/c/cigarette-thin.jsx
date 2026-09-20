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
		"content": `<style>.r4e76mbgv {
  fill: currentColor;
  d: path("M224 132H32a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12M28 176v-32a4 4 0 0 1 4-4h52v40H32a4 4 0 0 1-4-4m200 0a4 4 0 0 1-4 4H92v-40h132a4 4 0 0 1 4 4ZM204.51 62c8.22-14.61 8.21-23.23 6.75-27.9a10.82 10.82 0 0 0-4.94-6.51a4 4 0 0 1-2-5.26a4 4 0 0 1 5.3-2c.66.29 6.52 3.09 9.16 11c3 9 .53 20.66-7.29 34.57c-8.22 14.61-8.21 23.24-6.75 27.91a10.74 10.74 0 0 0 4.94 6.5A4 4 0 0 1 208 108a4.1 4.1 0 0 1-1.63-.35c-.66-.3-6.52-3.09-9.16-11c-2.98-9.06-.52-20.65 7.3-34.65m-40 0c8.22-14.61 8.21-23.23 6.75-27.9a10.82 10.82 0 0 0-4.94-6.51a4 4 0 0 1-2-5.26a4 4 0 0 1 5.3-2c.66.29 6.52 3.09 9.16 11c3 9 .53 20.66-7.29 34.57c-8.22 14.61-8.21 23.24-6.75 27.91a10.74 10.74 0 0 0 4.94 6.5A4 4 0 0 1 168 108a4.1 4.1 0 0 1-1.63-.35c-.66-.3-6.52-3.09-9.16-11c-2.98-9.06-.52-20.65 7.3-34.65");
}
</style><path class="r4e76mbgv"/>`,
		"fallback": "ph:cigarette-thin",
	});
}

export default Component;
