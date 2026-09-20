import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d70ksw_kc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d70ksw_kc"/>`,
		"fallback": "streamline-flex:inbox-tray-1-solid",
	});
}

export default Component;
