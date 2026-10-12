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
		"content": `<style>.fzoxper3a {
  width: 18.5px;
  height: 6px;
  x: 2.75px;
  y: 3.25px;
  rx: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jgbkgkbow {
  d: path("M6.5 3.75a1.5 2.5 0 0 1 0 5m-.5 3h12q.5 0 .5.5v8.5q0 .5-.43.25l-1.31-.75q-.43-.25-.86 0l-1.3.75q-.43.25-.86 0l-1.31-.75q-.43-.25-.86 0l-1.31.75q-.43.25-.86 0l-1.3-.75q-.43-.25-.86 0L5.93 21q-.43.25-.43-.25v-8.5q0-.5.5-.5");
}
</style><g class="hntgybcog"><rect class="fzoxper3a"/><path class="jgbkgkbow"/></g>`,
		"fallback": "iconoven:fabric-roll",
	});
}

export default Component;
