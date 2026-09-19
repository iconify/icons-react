import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx9kngbxs.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx9kngbxs"/>`,
		"fallback": "academicons:figshare-square",
	});
}

export default Component;
