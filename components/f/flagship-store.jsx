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
		"content": `<style>.ww_89fboq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.75l1.102 2.233l2.464.358l-1.783 1.738l.421 2.455L12 8.375L9.796 9.534l.421-2.455l-1.783-1.738l2.464-.358Zm-8.5 12l1-2.75h15l1 2.75Zm1.5 0v6.75h5v-3.25h4v3.25h5v-6.75M8.5 12v2.75M12 12v2.75M15.5 12v2.75");
}
</style><path class="ww_89fboq"/>`,
		"fallback": "uix-sharp:flagship-store",
	});
}

export default Component;
