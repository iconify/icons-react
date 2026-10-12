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
		"content": `<style>.f1bpvi6as {
  cx: 19px;
  cy: 4.75px;
  r: 1.5px;
}

.h2szosbsk {
  d: path("M2.75 19v-8.7l.003-.535l.447-.295l3.5-2.33l.55-.362l.55.362l3.5 2.33l.447.295l.003.535V19Zm9-7h5.75M14 12l3.6-5.9M14 12l3.6 5.9");
}

.jksu-ji1z {
  cx: 19px;
  cy: 19.25px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xzbk_7bof {
  cx: 19px;
  cy: 12px;
  r: 1.5px;
}
</style><g class="x2cwu0gfd"><path class="h2szosbsk"/><circle class="f1bpvi6as"/><circle class="xzbk_7bof"/><circle class="jksu-ji1z"/></g>`,
		"fallback": "iconoven:distribution-center-sharp",
	});
}

export default Component;
