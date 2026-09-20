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
		"content": `<style>.lj11dxbmt {
  fill: currentColor;
  d: path("M214 193.68L145.35 128L214 62.32l.18-.18A20 20 0 0 0 200 28H56a20 20 0 0 0-14.13 34.14l.18.18l68.6 65.68l-68.6 65.68l-.18.18A20 20 0 0 0 56 228h144a20 20 0 0 0 14.14-34.14ZM190 52l-62 59.39L66 52ZM66 204l62-59.39L190 204Z");
}
</style><path class="lj11dxbmt"/>`,
		"fallback": "ph:hourglass-simple-bold",
	});
}

export default Component;
