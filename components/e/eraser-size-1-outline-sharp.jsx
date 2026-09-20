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
		"content": `<style>.wyocnxbmc {
  fill: currentColor;
  d: path("M7.423 18q-.575 0-.999-.424T6 16.577q0-.279.102-.526t.325-.47l9.154-9.154q.223-.223.48-.325q.256-.102.535-.102q.575 0 .99.415q.414.414.414 1.008q0 .279-.099.529t-.303.473l-9.173 9.154q-.204.223-.46.322T7.423 18");
}
</style><path class="wyocnxbmc"/>`,
		"fallback": "material-symbols-light:eraser-size-1-outline-sharp",
	});
}

export default Component;
