import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esa6e0o2d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esa6e0o2d"/>`,
		"fallback": "streamline:computer-logo-windows-2-os-system-microsoft",
	});
}

export default Component;
