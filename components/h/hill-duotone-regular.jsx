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
		"content": `<style>.aivz5zb1p {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 14a5 5 0 0 1 10 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cp2ybrbab {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 14a7 7 0 0 1 14 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nqnw98byf {
  d: path("M2 14h20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.olqfcgidt {
  d: path("M6 19h12");
}

.t4l7c7bim {
  d: path("M2 14a7 7 0 0 1 14 0");
}

.x043no3hn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 19h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xctejrqwn {
  d: path("M12 14a5 5 0 0 1 10 0");
}

.zkem-xbdf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 14h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="cp2ybrbab"/><path class="aivz5zb1p"/><path class="zkem-xbdf"/><path class="x043no3hn"/><path class="t4l7c7bim"/><path class="xctejrqwn"/><path class="nqnw98byf"/><path class="olqfcgidt"/></g>`,
		"fallback": "iconmind:hill-duotone-regular",
	});
}

export default Component;
