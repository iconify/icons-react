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
		"content": `<style>.zplwlcckc {
  fill: currentColor;
  d: path("M214 48v48a6 6 0 0 1-12 0V62.48l-45.76 45.76a6 6 0 0 1-8.48-8.48L193.52 54H160a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6M99.76 147.76L54 193.52V160a6 6 0 0 0-12 0v48a6 6 0 0 0 6 6h48a6 6 0 0 0 0-12H62.48l45.76-45.76a6 6 0 0 0-8.48-8.48M208 154a6 6 0 0 0-6 6v33.52l-45.76-45.76a6 6 0 0 0-8.48 8.48L193.52 202H160a6 6 0 0 0 0 12h48a6 6 0 0 0 6-6v-48a6 6 0 0 0-6-6M62.48 54H96a6 6 0 0 0 0-12H48a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0V62.48l45.76 45.76a6 6 0 0 0 8.48-8.48Z");
}
</style><path class="zplwlcckc"/>`,
		"fallback": "ph:arrows-out-light",
	});
}

export default Component;
