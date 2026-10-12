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
		"content": `<style>.gpn8l89hg {
  cx: 9.1px;
  cy: 17.75px;
  r: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hxtsosbjm {
  d: path("m9.11 12.8l.65-1.44q.21-.45.34-.93l.29-1.07q.13-.48-.26-.79l-.91-.73q-.39-.31-.29-.8l.25-1.14q.1-.49-.32-.76l-1.01-.63q-.42-.27-.86-.51L5.7 3.3q-.44-.24-.63.22l-.56 1.37q-.19.46-.35.93l-.37 1.15q-.16.47.23.78l.91.72q.39.31.29.8l-.25 1.14q-.1.49.31.78l.89.64q.41.29.86.51l1.42.69q.45.22.66-.23m8.72-.97l.89-.64q.41-.29.31-.78l-.25-1.14q-.1-.49.29-.8l.91-.72q.39-.31.23-.78l-.37-1.15q-.16-.47-.35-.93l-.56-1.37q-.19-.46-.63-.22l-1.29.7q-.44.24-.86.51l-1.01.63q-.42.27-.32.76l.25 1.14q.1.49-.29.8l-.91.73q-.39.31-.26.79l.29 1.07q.13.48.34.93l.65 1.44q.21.45.66.23l1.42-.69q.45-.22.86-.51");
}

.kb0uz2bvp {
  cx: 12px;
  cy: 16.94px;
  r: 1.5px;
}

.lvjpbib7u {
  cx: 14.9px;
  cy: 17.75px;
  r: 1.5px;
}
</style><g class="hntgybcog"><path class="hxtsosbjm"/><circle class="kb0uz2bvp"/><circle class="gpn8l89hg"/><circle class="lvjpbib7u"/></g>`,
		"fallback": "iconoven:holly-sprig",
	});
}

export default Component;
