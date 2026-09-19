import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_b5swbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m_b5swbqc"/>`,
		"fallback": "griddy-icons:bus-mini",
	});
}

export default Component;
