import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo-s3h8ki.css';
import '../../css/z/zfwtadppq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo-s3h8ki"/><path class="zfwtadppq"/>`,
		"fallback": "circum:hospital-1",
	});
}

export default Component;
