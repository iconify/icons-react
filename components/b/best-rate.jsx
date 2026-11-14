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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jp8fl_x4g {
  d: path("M6 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m10.014-2.458l.166.335a1.5 1.5 0 0 0 1.129.821l.37.053a.574.574 0 0 1 .318.979l-.268.26a1.5 1.5 0 0 0-.431 1.328l.063.368a.574.574 0 0 1-.832.605l-.331-.174a1.5 1.5 0 0 0-1.396 0l-.331.174a.574.574 0 0 1-.832-.605l.063-.368a1.5 1.5 0 0 0-.431-1.328l-.268-.26a.574.574 0 0 1 .318-.979l.37-.053a1.5 1.5 0 0 0 1.129-.821l.166-.335a.574.574 0 0 1 1.028 0");
}

.nxi1pwfdk {
  d: path("m3.935 10.304l3.279-3.875A2.63 2.63 0 0 1 9.217 5.5h9.658A2.625 2.625 0 0 1 21.5 8.125v7.75a2.625 2.625 0 0 1-2.625 2.625H9.217a2.63 2.63 0 0 1-2.003-.929l-3.279-3.875a2.625 2.625 0 0 1 0-3.392");
}
</style><g class="hntgybcog"><path class="nxi1pwfdk"/><path class="jp8fl_x4g"/></g>`,
		"fallback": "uix:best-rate",
	});
}

export default Component;
