import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrm89iuuq.css';
import '../../css/y/y0bmns4xv.css';
import '../../css/k/k79q3xboj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrm89iuuq"/><path class="y0bmns4xv"/><circle class="k79q3xboj"/>`,
		"fallback": "ooui:image-add-ltr",
	});
}

export default Component;
