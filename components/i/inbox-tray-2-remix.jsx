import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2yjogvfe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v2yjogvfe"/>`,
		"fallback": "streamline:inbox-tray-2-remix",
	});
}

export default Component;
