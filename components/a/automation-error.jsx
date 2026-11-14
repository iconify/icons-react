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

.pwef3-b_n {
  d: path("m9.323 3.737l.013-.134a1.14 1.14 0 0 1 1.135-1.032h.058a1.14 1.14 0 0 1 1.135 1.032l.013.134a1.5 1.5 0 0 0 .919 1.242l.326.135a1.5 1.5 0 0 0 1.528-.228l.104-.086a1.14 1.14 0 0 1 1.532.073l.041.041a1.14 1.14 0 0 1 .073 1.532l-.086.104a1.5 1.5 0 0 0-.228 1.528l.135.326a1.5 1.5 0 0 0 1.242.919l.134.013a1.14 1.14 0 0 1 1.032 1.135v.058a1.14 1.14 0 0 1-1.032 1.135l-.134.013a1.5 1.5 0 0 0-1.242.919l-.135.326a1.5 1.5 0 0 0 .228 1.528l.086.104a1.14 1.14 0 0 1-.073 1.532l-.041.041a1.14 1.14 0 0 1-1.532.073l-.104-.086a1.5 1.5 0 0 0-1.528-.228l-.326.135a1.5 1.5 0 0 0-.919 1.242l-.013.134a1.14 1.14 0 0 1-1.135 1.032h-.058a1.14 1.14 0 0 1-1.135-1.032l-.013-.134a1.5 1.5 0 0 0-.919-1.242l-.326-.135a1.5 1.5 0 0 0-1.528.228l-.104.086a1.14 1.14 0 0 1-1.532-.073l-.041-.041a1.14 1.14 0 0 1-.073-1.532l.086-.104a1.5 1.5 0 0 0 .228-1.528l-.135-.326a1.5 1.5 0 0 0-1.242-.919l-.134-.013a1.14 1.14 0 0 1-1.032-1.135v-.058a1.14 1.14 0 0 1 1.032-1.135l.134-.013a1.5 1.5 0 0 0 1.242-.919l.135-.326a1.5 1.5 0 0 0-.228-1.528L4.8 6.446a1.14 1.14 0 0 1 .073-1.532l.041-.041A1.14 1.14 0 0 1 6.446 4.8l.104.086a1.5 1.5 0 0 0 1.528.228l.326-.135a1.5 1.5 0 0 0 .919-1.242");
}

.wcfsovblj {
  d: path("M7.75 10.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M20 15v3.25M20 21h.01");
}
</style><g class="hntgybcog"><path class="pwef3-b_n"/><path class="wcfsovblj"/></g>`,
		"fallback": "uix:automation-error",
	});
}

export default Component;
