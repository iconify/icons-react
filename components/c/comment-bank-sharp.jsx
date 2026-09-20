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
		"content": `<style>.fl6lqk5vz {
  fill: currentColor;
  d: path("M12.5 11L15 9.5l2.5 1.5V4h-5zM2 22V2h20v16H6z");
}
</style><path class="fl6lqk5vz"/>`,
		"fallback": "material-symbols:comment-bank-sharp",
	});
}

export default Component;
