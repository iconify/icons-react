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
		"content": `<style>.ak4gzbbkm {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17 5h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.amxnnhszv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 5h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bpv51umco {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 5v15h14V5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dpjt_8byn {
  d: path("M17 5h4");
}

.jk_vepbzc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 12h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jyz8nlkxs {
  d: path("M3 5h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.z26jhbbft {
  d: path("M5 5v15h14V5");
}

.z8g2jgblp {
  d: path("M5 12h14");
}
</style><g class="nrj6p8qat"><path class="bpv51umco"/><path class="jk_vepbzc"/><path class="amxnnhszv"/><path class="ak4gzbbkm"/><path class="z26jhbbft"/><path class="z8g2jgblp"/><path class="jyz8nlkxs"/><path class="dpjt_8byn"/></g>`,
		"fallback": "iconmind:beaker-duotone-regular",
	});
}

export default Component;
