import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzfty7p4v.css';
import '../../css/f/f_lzw-bhd.css';
import '../../css/y/y5vn0krru.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzfty7p4v"/><path class="f_lzw-bhd"/><path class="y5vn0krru"/>`,
		"fallback": "energy-icons:electric-van-20",
	});
}

export default Component;
