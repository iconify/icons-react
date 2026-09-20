import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah7m_ubpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah7m_ubpj"/>`,
		"fallback": "mdi:eye-remove-outline",
	});
}

export default Component;
