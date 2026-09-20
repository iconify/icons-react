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
		"content": `<style>.a1z8vac9r {
  d: path("M17.5 16H22");
}

.bqqmp9bon {
  d: path("M6.5 5.5 9 8l-2.5 2.5");
}

.cbyueebip {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17.5 16H22");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ilm322b3y {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 8h4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kqxo87sbj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6.5 5.5 9 8l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rncaisbya {
  d: path("M2 8h4.5");
}

.t4gdzh90j {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17.5 13.5 15 16l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yzk-0x3pl {
  d: path("M17.5 13.5 15 16l2.5 2.5");
}
</style><g class="hntgybcog"><path class="ilm322b3y"/><path class="kqxo87sbj"/><path class="cbyueebip"/><path class="t4gdzh90j"/><path class="rncaisbya"/><path class="bqqmp9bon"/><path class="a1z8vac9r"/><path class="yzk-0x3pl"/></g>`,
		"fallback": "iconmind:deadlock-duotone-thin",
	});
}

export default Component;
