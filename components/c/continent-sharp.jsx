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
		"content": `<style>.rvqx89ciz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 4.25C6.63 3.54 8.79 3.08 10 3l1.603-.106l1.147.856c.67.5.63 1.5 1.25 2.25c.63.75 2.29 1.46 2.5 2.25l.024.09l-1.274 2.41c-.46.88-1.17 1.71-1.5 2.75s-.08 2.29-.5 3.5s-1.37 3.54-2 3.75c-.62.21-1.37-1.42-1.75-2.5c-.37-1.08-.17-2.87-.5-4l-.598-2.031L7.5 11.5c-.79-.62-2.54-.29-3.25-1L2.872 9.122L3.25 7.25l.364-1.805zM17.25 14.5l1-1l1 1l1 1l1-1m-4 3.5l1-1l1 1l1 1l1-1");
}
</style><path class="rvqx89ciz"/>`,
		"fallback": "iconoven:continent-sharp",
	});
}

export default Component;
