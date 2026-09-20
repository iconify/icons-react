import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f9bdz1bso {
  fill: currentColor;
  d: path("M51 37.31a4 4 0 0 0-6 5.38L53.5 52H40a12 12 0 0 0-12 12v160a11.89 11.89 0 0 0 6.93 10.88A12.1 12.1 0 0 0 40 236a12 12 0 0 0 7.74-2.87L81.49 204h110.19L205 218.69a4 4 0 0 0 3 1.31a4 4 0 0 0 3-6.69ZM80 196a4 4 0 0 0-2.61 1l-34.82 30a4 4 0 0 1-6.57-3V64a4 4 0 0 1 4-4h20.78l123.63 136ZM228 64v122a4 4 0 0 1-8 0V64a4 4 0 0 0-4-4H105.79a4 4 0 0 1 0-8H216a12 12 0 0 1 12 12");
}
</style><path class="f9bdz1bso"/>`,
		"fallback": "ph:chat-slash-thin",
	});
}

export default Component;
