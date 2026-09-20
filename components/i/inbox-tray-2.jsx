import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgu1592no.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgu1592no"/>`,
		"fallback": "streamline:inbox-tray-2",
	});
}

export default Component;
