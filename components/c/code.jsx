import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrxv_pbtm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrxv_pbtm"/>`,
		"fallback": "rivet-icons:code",
	});
}

export default Component;
