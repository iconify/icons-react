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
		"content": `<style>.ypbhdv3qw {
  fill: currentColor;
  d: path("M17 20v-7h5v7h-5ZM4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v5h-7v9H4Z");
}
</style><path class="ypbhdv3qw"/>`,
		"fallback": "material-symbols:float-landscape",
	});
}

export default Component;
