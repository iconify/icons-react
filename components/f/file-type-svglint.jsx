import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h2mp_rbdw {
  cx: 12px;
  cy: 19px;
  r: 1.5px;
  fill: var(--svg-color--f5a623, #f5a623);
  stroke: none;
}

.hq806s4et {
  cx: 20px;
  cy: 19px;
  r: 1.5px;
  fill: var(--svg-color--f5a623, #f5a623);
  stroke: none;
}

.il595vbpy {
  cx: 16px;
  cy: 16px;
  r: 9.5px;
  stroke-width: var(--svg-stroke-width--3px, 3px);
}

.izqhagsvm {
  cx: 16px;
  cy: 16px;
  r: 11px;
  stroke-dasharray: 1 1;
  stroke-width: var(--svg-stroke-width--4px, 4px);
}

.rl2wnimzx {
  stroke-linecap: round;
  d: path("M12 19q4-9 8 0");
}

.zgjrod58c {
  fill: none;
  stroke: var(--svg-color--f5a623, #f5a623);
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="zgjrod58c"><circle class="izqhagsvm"/><circle class="il595vbpy"/><path class="rl2wnimzx"/><circle class="h2mp_rbdw"/><circle class="hq806s4et"/></g>`,
		"fallback": "vscode-icons:file-type-svglint",
	});
}

export default Component;
