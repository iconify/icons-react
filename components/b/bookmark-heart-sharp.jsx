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
		"content": `<style>.a_dkgtaof {
  fill: currentColor;
  d: path("M12 14.3q1.275-1.175 2.063-1.937t1.212-1.313t.575-.962T16 9.2q0-.9-.65-1.55T13.8 7q-.525 0-1.013.213T12 7.8q-.3-.375-.775-.587T10.2 7q-.9 0-1.55.65T8 9.2q0 .475.137.875t.563.95t1.2 1.313T12 14.3M5 21V3h14v18l-7-3z");
}
</style><path class="a_dkgtaof"/>`,
		"fallback": "material-symbols:bookmark-heart-sharp",
	});
}

export default Component;
