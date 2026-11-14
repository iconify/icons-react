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
		"content": `<style>.bugic2bwj {
  d: path("M9 2.5h6v7.25H9Zm0 2.75h6");
}

.jd3k6i3ga {
  d: path("M2.5 9L4 12.5v9h16v-9L21.5 9M4 12.5h16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jd3k6i3ga"/><path class="bugic2bwj"/></g>`,
		"fallback": "uix-sharp:case-packer",
	});
}

export default Component;
