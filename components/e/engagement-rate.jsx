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
		"content": `<style>.pqbchbcem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.479 19.692c-.303.2-.479.308-.479.308S3 14.5 3 8.75C3 6.1 5.1 4 7.75 4C9.5 4 11.1 5 12 6.5C12.9 5 14.5 4 16.25 4C18.9 4 21 6.1 21 8.75c0 1.204-.395 2.397-1.018 3.531M14.75 21.25l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="pqbchbcem"/>`,
		"fallback": "uix:engagement-rate",
	});
}

export default Component;
