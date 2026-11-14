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
		"content": `<style>.gs8m_709r {
  d: path("M3 12h6m6 0h6");
}

.npihndbvv {
  fill: currentColor;
  d: path("M9 3.5h6v17H9Z");
}

.oda4a2bll {
  d: path("M3 3.5h18v17H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oda4a2bll"/><path class="npihndbvv"/><path class="gs8m_709r"/></g>`,
		"fallback": "uix-sharp:database-column",
	});
}

export default Component;
