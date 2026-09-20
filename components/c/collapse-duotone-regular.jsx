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
		"content": `<style>.aw_23kbkp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M10 10 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.b8xluzc6p {
  d: path("M14 20v-6h6");
}

.j9sg938ez {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M10 4v6H4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kbulryb2v {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 20v-6h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ptvhb3bfe {
  d: path("M10 10 4 4");
}

.v6f1oidhi {
  d: path("m14 14 6 6");
}

.z_leajngu {
  d: path("M10 4v6H4");
}

.zqnqkr2ls {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m14 14 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="j9sg938ez"/><path class="aw_23kbkp"/><path class="kbulryb2v"/><path class="zqnqkr2ls"/><path class="z_leajngu"/><path class="ptvhb3bfe"/><path class="b8xluzc6p"/><path class="v6f1oidhi"/></g>`,
		"fallback": "iconmind:collapse-duotone-regular",
	});
}

export default Component;
