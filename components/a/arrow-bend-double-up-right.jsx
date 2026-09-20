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
		"content": `<style>.wa8zzleuq {
  fill: currentColor;
  d: path("m229.66 109.66l-48 48a8 8 0 0 1-11.32-11.32L212.69 104l-42.35-42.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32m-48-11.32l-48-48a8 8 0 0 0-11.32 11.32L156.69 96H128A104.11 104.11 0 0 0 24 200a8 8 0 0 0 16 0a88.1 88.1 0 0 1 88-88h28.69l-34.35 34.34a8 8 0 0 0 11.32 11.32l48-48a8 8 0 0 0 0-11.32");
}
</style><path class="wa8zzleuq"/>`,
		"fallback": "ph:arrow-bend-double-up-right",
	});
}

export default Component;
