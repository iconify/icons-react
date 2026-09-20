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
		"content": `<style>.e31kwtbxo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19 21v-6a2 2 0 0 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ehnvkinxp {
  d: path("M7 4v4");
}

.en1fcactg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 3v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g-her-a5h {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17 4v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i2-ny_bzf {
  d: path("M12 3v4");
}

.jwoj7ibuk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 21v-6a2 2 0 0 1 4 0v-3a2 2 0 0 1 4 0v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mqbr2yyal {
  d: path("M19 21v-6a2 2 0 0 0 -4 0");
}

.rsinobb0c {
  d: path("M17 4v4");
}

.xwdqjlphf {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 4v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.znimqt98n {
  d: path("M5 21v-6a2 2 0 0 1 4 0v-3a2 2 0 0 1 4 0v4");
}
</style><g class="hntgybcog"><path class="jwoj7ibuk"/><path class="e31kwtbxo"/><path class="xwdqjlphf"/><path class="en1fcactg"/><path class="g-her-a5h"/><path class="znimqt98n"/><path class="mqbr2yyal"/><path class="ehnvkinxp"/><path class="i2-ny_bzf"/><path class="rsinobb0c"/></g>`,
		"fallback": "iconmind:hand-wash-duotone-thin",
	});
}

export default Component;
