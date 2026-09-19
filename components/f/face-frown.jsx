import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp_oc9q1x.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp_oc9q1x"/>`,
		"fallback": "fa7-regular:face-frown",
	});
}

export default Component;
