import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlet2fqqv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlet2fqqv"/>`,
		"fallback": "streamline:computer-logo-windows-1-os-system-microsoft",
	});
}

export default Component;
