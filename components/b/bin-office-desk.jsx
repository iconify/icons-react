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
		"content": `<style>.u60m_0bus {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19m-18 0v6.5m17-6.5v6.5M12.75 13L11.5 4.5H19L17.75 13");
}
</style><path class="u60m_0bus"/>`,
		"fallback": "uix-sharp:bin-office-desk",
	});
}

export default Component;
