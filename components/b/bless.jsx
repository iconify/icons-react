import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxq0p3_iq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxq0p3_iq"/>`,
		"fallback": "icon-park-outline:bless",
	});
}

export default Component;
