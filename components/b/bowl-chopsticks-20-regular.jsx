import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yk4ctdmrw {
  fill: currentColor;
  d: path("M4.926 2.238a.5.5 0 0 0-.852.524L7.913 9H2.5a.5.5 0 0 0-.5.5v.5a8 8 0 0 0 16 0v-.5a.5.5 0 0 0-.5-.5h-5.413L7.926 2.238a.5.5 0 0 0-.852.524L10.913 9H9.087zM3.29 12A7 7 0 0 1 3 10h14c0 .695-.101 1.366-.29 2zm.384 1h12.652a7 7 0 0 1-12.652 0");
}
</style><path class="yk4ctdmrw"/>`,
		"fallback": "fluent:bowl-chopsticks-20-regular",
	});
}

export default Component;
