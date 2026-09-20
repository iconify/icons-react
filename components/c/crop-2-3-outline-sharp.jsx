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
		"content": `<style>.u52u4h80x {
  fill: currentColor;
  d: path("M6 22V2h12v20zm2-2h8V4H8zm0 0V4z");
}
</style><path class="u52u4h80x"/>`,
		"fallback": "material-symbols:crop-2-3-outline-sharp",
	});
}

export default Component;
