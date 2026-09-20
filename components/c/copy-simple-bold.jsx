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
		"content": `<style>.y17on7b9x {
  fill: currentColor;
  d: path("M180 64H40a12 12 0 0 0-12 12v140a12 12 0 0 0 12 12h140a12 12 0 0 0 12-12V76a12 12 0 0 0-12-12m-12 140H52V88h116Zm60-164v140a12 12 0 0 1-24 0V52H76a12 12 0 0 1 0-24h140a12 12 0 0 1 12 12");
}
</style><path class="y17on7b9x"/>`,
		"fallback": "ph:copy-simple-bold",
	});
}

export default Component;
