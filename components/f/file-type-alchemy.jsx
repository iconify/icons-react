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
		"content": `<style>.o9i1vmbbc {
  d: path("M12 21.13L4.1 7.43h15.8z");
}

.orel5k_wx {
  cx: 12px;
  cy: 12px;
  r: 1.3px;
  fill: var(--svg-color--d8835a, #d8835a);
  stroke: none;
}

.p058992qq {
  cx: 12px;
  cy: 12px;
  r: 9.5px;
}

.sutwfccoy {
  fill: none;
  stroke: var(--svg-color--a3c473, #a3c473);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g transform="translate(-.39 -.39)scale(1.3659)" class="sutwfccoy"><circle class="p058992qq"/><path class="o9i1vmbbc"/><circle class="orel5k_wx"/></g>`,
		"fallback": "vscode-icons:file-type-alchemy",
	});
}

export default Component;
