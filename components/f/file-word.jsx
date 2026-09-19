import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlqf_zjuo.css';
import '../../css/x/xnk1gt9lb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlqf_zjuo"/><path class="xnk1gt9lb"/>`,
		"fallback": "icomoon-free:file-word",
	});
}

export default Component;
