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
		"content": `<style>.atcqm9b8v {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2.5 2.5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dlffxm03j {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M20.5 17v3.5H17");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nbncjhbtk {
  d: path("M7.5 7.5 10 10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qp5e0_b3n {
  d: path("M12.5 12.5 15 15");
}

.tdk6nzbaw {
  d: path("M20.5 17v3.5H17");
}

.uawgdrhah {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12.5 12.5 15 15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ucd8o6bjf {
  d: path("M2.5 2.5 5 5");
}

.z81oy96ne {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7.5 7.5 10 10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="atcqm9b8v"/><path class="z81oy96ne"/><path class="uawgdrhah"/><path class="dlffxm03j"/><path class="ucd8o6bjf"/><path class="nbncjhbtk"/><path class="qp5e0_b3n"/><path class="tdk6nzbaw"/></g>`,
		"fallback": "iconmind:event-stream-duotone-regular",
	});
}

export default Component;
