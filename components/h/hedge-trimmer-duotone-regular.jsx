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
		"content": `<style>.ah8uvpf1o {
  d: path("M3 10h13");
}

.fbw2ldgtv {
  d: path("M12 10v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.opzncliew {
  d: path("M8 10v7");
}

.svo3n0y2p {
  d: path("M4 10v7");
}

.x6walc0pr {
  d: path("M16 7h5v6h-5Z");
}

.y1lw-i3ot {
  fill: currentColor;
  d: path("M16 7h5v6h-5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="y1lw-i3ot"/><path class="ah8uvpf1o"/><path class="svo3n0y2p"/><path class="opzncliew"/><path class="fbw2ldgtv"/><path class="x6walc0pr"/></g>`,
		"fallback": "iconmind:hedge-trimmer-duotone-regular",
	});
}

export default Component;
