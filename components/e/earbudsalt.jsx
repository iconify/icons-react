import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_njxqb4o.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_njxqb4o"/>`,
		"fallback": "whh:earbudsalt",
	});
}

export default Component;
