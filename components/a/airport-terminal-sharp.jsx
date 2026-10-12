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
		"content": `<style>.hssy5dt4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13.5q9.25-3.5 18.5 0v2H19.5v5.75h-15V15.5H2.75Zm5.5 3v4.75M12 16.5v4.75m3.75-4.75v4.75M12.25 5.5H21m-3.25 0l-2-2.75m2 2.75l-2 2.75M13.5 5.5l-1-1.75");
}
</style><path class="hssy5dt4k"/>`,
		"fallback": "iconoven:airport-terminal-sharp",
	});
}

export default Component;
