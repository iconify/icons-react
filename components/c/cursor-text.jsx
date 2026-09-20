import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_2l1bbdw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_2l1bbdw"/>`,
		"fallback": "radix-icons:cursor-text",
	});
}

export default Component;
