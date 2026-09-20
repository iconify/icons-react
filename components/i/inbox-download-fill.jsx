import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me9fu616u.css';
import '../../css/b/blt65bfce.css';
import '../../css/u/utyj_2zie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me9fu616u"/><path class="blt65bfce"/><path class="utyj_2zie"/>`,
		"fallback": "mage:inbox-download-fill",
	});
}

export default Component;
