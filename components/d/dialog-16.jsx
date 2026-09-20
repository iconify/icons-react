import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xowt0m_af.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xowt0m_af"/>`,
		"fallback": "qlementine-icons:dialog-16",
	});
}

export default Component;
