import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otum_acis.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otum_acis"/>`,
		"fallback": "selfhst:free-isp-light",
	});
}

export default Component;
