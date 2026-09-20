import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqkec9sqi.css';
import '../../css/g/gun75xfbd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqkec9sqi"/><circle class="gun75xfbd"/>`,
		"fallback": "selfhst:dex-auth",
	});
}

export default Component;
