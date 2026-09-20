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
		"content": `<style>.y_zg1dbei {
  fill: currentColor;
  d: path("M2.5 18V6h12v12zm14-7V6h5v5zm0 7v-5h5v5zm-5.502-2.5q.416 0 .709-.291t.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293m-5.048-.261l5.789-5.789l-.689-.688l-5.788 5.788zm.048-4.739q.415 0 .709-.291T7 9.502t-.291-.709t-.707-.293t-.709.291T5 9.498t.291.709t.707.293");
}
</style><path class="y_zg1dbei"/>`,
		"fallback": "material-symbols-light:heap-snapshot-thumbnail-sharp",
	});
}

export default Component;
