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
		"content": `<style>.dmdba20hn {
  fill: currentColor;
  d: path("M8 13.65V6h3v7.65l-1.5-1.4zm5 1.5V2h3v10.15zM3 18.6V10h3v5.6zm0 2.45l6.45-6.45L13 17.65l5.6-5.6H17v-2h5v5h-2v-1.6l-6.9 6.9l-3.55-3.05l-3.75 3.75z");
}
</style><path class="dmdba20hn"/>`,
		"fallback": "material-symbols:finance-mode-outline",
	});
}

export default Component;
