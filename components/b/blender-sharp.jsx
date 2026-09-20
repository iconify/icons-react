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
		"content": `<style>.f4r5nwbws {
  fill: currentColor;
  d: path("M6.808 21v-3.75l1.927-1.639l-.76-4.919H4.769V4H10v-.77h4V4h3.052l-1.786 11.612l1.926 1.638V21zm1.02-11.308L7.095 5H5.77v4.692zm4.721 8.857q.22-.22.22-.549t-.22-.549t-.549-.22t-.549.22t-.22.549t.22.549t.549.22t.549-.22M9.662 15h4.677L15.88 5H8.119z");
}
</style><path class="f4r5nwbws"/>`,
		"fallback": "material-symbols-light:blender-sharp",
	});
}

export default Component;
