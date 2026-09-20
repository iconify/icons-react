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
		"content": `<style>.vzu1puw3u {
  fill: currentColor;
  d: path("M7.502 7.116q-.415 0-.709.29t-.293.707t.291.709t.707.294t.709-.292t.293-.706t-.291-.71t-.707-.293m0 8.77q-.415 0-.709.29q-.293.292-.293.707q0 .416.291.71t.707.293t.709-.292t.293-.706t-.291-.709t-.707-.294M4 11.617v-7h16v7zm1-6v5h14v-5zM4 20.385v-7h16v7zm1-6v5h14v-5zm0-8.77v5zm0 8.77v5z");
}
</style><path class="vzu1puw3u"/>`,
		"fallback": "material-symbols-light:dns-outline-sharp",
	});
}

export default Component;
