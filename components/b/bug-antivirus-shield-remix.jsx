import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enx_use0y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="enx_use0y"/>`,
		"fallback": "streamline:bug-antivirus-shield-remix",
	});
}

export default Component;
