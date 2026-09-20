import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2nt4m_0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e2nt4m_0r"/>`,
		"fallback": "reicon:box-3",
	});
}

export default Component;
