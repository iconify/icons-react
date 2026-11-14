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
		"content": `<style>.bn1de_bku {
  d: path("m8.314 3.755l.006-.084a.93.93 0 0 1 .93-.863a.93.93 0 0 1 .93.863l.006.084a1.39 1.39 0 0 0 .852 1.178a1.39 1.39 0 0 0 1.435-.23l.065-.056a.93.93 0 0 1 1.267.048a.93.93 0 0 1 .048 1.267l-.056.065a1.39 1.39 0 0 0-.23 1.435a1.39 1.39 0 0 0 1.178.852l.084.006a.93.93 0 0 1 .863.93a.93.93 0 0 1-.863.93l-.084.006a1.39 1.39 0 0 0-1.178.852a1.39 1.39 0 0 0 .23 1.435l.056.065a.93.93 0 0 1-.048 1.267a.93.93 0 0 1-1.267.048l-.065-.056a1.39 1.39 0 0 0-1.435-.23a1.39 1.39 0 0 0-.852 1.178l-.006.084a.93.93 0 0 1-.93.863a.93.93 0 0 1-.93-.863l-.006-.084a1.39 1.39 0 0 0-.852-1.178a1.39 1.39 0 0 0-1.435.23l-.065.056a.93.93 0 0 1-1.267-.048a.93.93 0 0 1-.048-1.267l.056-.065a1.39 1.39 0 0 0 .23-1.435a1.39 1.39 0 0 0-1.178-.852l-.084-.006a.93.93 0 0 1-.863-.93a.93.93 0 0 1 .863-.93l.084-.006a1.39 1.39 0 0 0 1.178-.852a1.39 1.39 0 0 0-.23-1.435l-.056-.065a.93.93 0 0 1 .048-1.267a.93.93 0 0 1 1.267-.048l.065.056a1.39 1.39 0 0 0 1.435.23a1.39 1.39 0 0 0 .852-1.178");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jk03f6bbo {
  d: path("M7.5 9.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M18 15v6m-3-3h6");
}
</style><g class="hntgybcog"><path class="bn1de_bku"/><path class="jk03f6bbo"/></g>`,
		"fallback": "uix:gear-plus",
	});
}

export default Component;
