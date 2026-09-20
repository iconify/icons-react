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
		"content": `<style>.y5qj_bo_c {
  fill: currentColor;
  d: path("M12.5 11V4H4v13.125L5.15 16H20V4h-2.5v7L15 9.5zM2 22V2h20v16H6zM4 4v12z");
}
</style><path class="y5qj_bo_c"/>`,
		"fallback": "material-symbols:comment-bank-outline-sharp",
	});
}

export default Component;
