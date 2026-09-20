import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":98};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mp2wqsbih {
  fill: var(--svg-color--eb043b, #eb043b);
  d: path("M121.5 97.041H7.542c-5.844 0-9.466-8.093-6.461-14.424l37.08-77.97C39.56 1.764 41.989 0 44.664 0h76.838z");
}

.r_ggsrbcy {
  fill: var(--svg-color--0085ff, #0085ff);
  d: path("M134.54 0h113.92c5.843 0 9.464 8.093 6.46 14.424l-37.081 77.97c-1.357 2.844-3.826 4.607-6.461 4.607H134.54z");
}
</style><path class="mp2wqsbih"/><path class="r_ggsrbcy"/>`,
		"fallback": "logos:eraser-icon",
	});
}

export default Component;
