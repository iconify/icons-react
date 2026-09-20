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
		"content": `<style>.nv5kqrv3c {
  fill: currentColor;
  d: path("M192 96a40 40 0 0 0-24-72H96a40 40 0 0 0-24 72a40 40 0 0 0 1.37 65A44 44 0 1 0 144 196v-36a40 40 0 1 0 48-64m-64 56H96a24 24 0 0 1 0-48h32Zm40-64h-24V40h24a24 24 0 0 1 0 48");
}
</style><path class="nv5kqrv3c"/>`,
		"fallback": "ph:figma-logo-fill",
	});
}

export default Component;
