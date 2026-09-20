import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/y/y_mzvybbi.css';
import '../../css/t/tojp-3b8u.css';
import '../../css/g/gxke3_qzz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="y_mzvybbi"/><path class="tojp-3b8u"/><path class="gxke3_qzz"/></g>`,
		"fallback": "streamline-plump:contact-phonebook",
	});
}

export default Component;
