import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpu-0gzml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xpu-0gzml"/>`,
		"fallback": "streamline-logos:cryengine-logo-block",
	});
}

export default Component;
