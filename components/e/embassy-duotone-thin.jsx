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
		"content": `<style>.ef2afnbgy {
  d: path("M4 21V10h16v11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hppiisbif {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 21h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iik0uzoym {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 21V10h16v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lmoarbbkf {
  d: path("M12 3h7v4h-7");
}

.oqfv9rb9x {
  d: path("M2 21h20");
}

.p9f-cpbid {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 2v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yl01u3auh {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 3h7v4h-7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yvwbi-etd {
  d: path("M12 2v8");
}
</style><g class="hntgybcog"><path class="iik0uzoym"/><path class="hppiisbif"/><path class="p9f-cpbid"/><path class="yl01u3auh"/><path class="ef2afnbgy"/><path class="oqfv9rb9x"/><path class="yvwbi-etd"/><path class="lmoarbbkf"/></g>`,
		"fallback": "iconmind:embassy-duotone-thin",
	});
}

export default Component;
