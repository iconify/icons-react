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
		"content": `<style>.bxmj3jlza {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 7a3 3 0 0 1 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c5wjx8n3c {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 19h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d23kmtbkz {
  d: path("M9 7a3 3 0 0 1 -6 0");
}

.efyfmvbkh {
  d: path("M21 7a3 3 0 0 1 -6 0");
}

.gz0-0ft4b {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M21 7a3 3 0 0 1 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jwnes9bsk {
  d: path("M8 19h8");
}

.kj672_yfn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 7v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lbllh8b8w {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 7h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.x5li7lwaz {
  d: path("M12 7v12");
}
</style><g class="nrj6p8qat"><path class="lbllh8b8w"/><path class="bxmj3jlza"/><path class="gz0-0ft4b"/><path class="kj672_yfn"/><path class="c5wjx8n3c"/><path class="ozi-k-boi"/><path class="d23kmtbkz"/><path class="efyfmvbkh"/><path class="x5li7lwaz"/><path class="jwnes9bsk"/></g>`,
		"fallback": "iconmind:bias-duotone-regular",
	});
}

export default Component;
