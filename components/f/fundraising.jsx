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
		"content": `<style>.bq6ix9bbt {
  cx: 17.25px;
  cy: 7.5px;
  r: 4px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jepr_mnqo {
  d: path("M6.25 13.15V5a2.25 2.25 0 0 1 4.5 0v8.15a4.25 4.25 0 1 1-4.5 0M8.5 17V9.75");
}

.zempiekqj {
  d: path("M18.38 6.52c-.21-.45-.62-.75-1.12-.75c-.67 0-1.17.39-1.17.86c0 1.22 2.34.61 2.34 1.78c0 .49-.5.83-1.17.83c-.52 0-.96-.28-1.14-.73");
}
</style><g class="hntgybcog"><path class="jepr_mnqo"/><circle class="bq6ix9bbt"/><path class="zempiekqj"/></g>`,
		"fallback": "iconoven:fundraising",
	});
}

export default Component;
