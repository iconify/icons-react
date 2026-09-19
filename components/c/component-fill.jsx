import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pldlo5m_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pldlo5m_r"/>`,
		"fallback": "iconamoon:component-fill",
	});
}

export default Component;
