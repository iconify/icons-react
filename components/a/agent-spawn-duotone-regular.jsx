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
		"content": `<style>.dwjpxkr-k {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13.5 14.83a3.5 3.5 0 1 1 -2.96 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ldlcwabvd {
  d: path("M13.5 14.83a3.5 3.5 0 1 1 -2.96 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qk9kazzah {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13.9 2.92a4.5 4.5 0 1 1 -3.8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tqmlicc3x {
  d: path("M12 11.5v3");
}

.vlnz0-j6y {
  d: path("M13.9 2.92a4.5 4.5 0 1 1 -3.8 0");
}

.x20t-re3c {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 11.5v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="qk9kazzah"/><path class="x20t-re3c"/><path class="dwjpxkr-k"/><path class="vlnz0-j6y"/><path class="tqmlicc3x"/><path class="ldlcwabvd"/></g>`,
		"fallback": "iconmind:agent-spawn-duotone-regular",
	});
}

export default Component;
