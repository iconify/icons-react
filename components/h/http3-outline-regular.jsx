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
		"content": `<style>.c4my-jbpv {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.mxzk029nb {
  d: path("M12 10v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o3x_gzblq {
  d: path("m8 13 4 4 4 -4");
}

.qkea2dbiu {
  d: path("M5 6.5h14");
}

.xslfg2evh {
  d: path("M6 21h12");
}
</style><g class="nrj6p8qat"><path class="c4my-jbpv"/><path class="qkea2dbiu"/><path class="mxzk029nb"/><path class="o3x_gzblq"/><path class="xslfg2evh"/></g>`,
		"fallback": "iconmind:http3-outline-regular",
	});
}

export default Component;
