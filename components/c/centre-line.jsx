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
		"content": `<style>.is4tjv2yr {
  d: path("M2.5 8.5h3v7h-3m19-7h-3v7h3M12 12h.01");
}

.jeoaurmiu {
  d: path("M2.5 4.5h19v15h-19Zm9.5 0v15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jeoaurmiu"/><path class="is4tjv2yr"/></g>`,
		"fallback": "uix-sharp:centre-line",
	});
}

export default Component;
