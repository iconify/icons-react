import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy35yhbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy35yhbek"/>`,
		"fallback": "grommet-icons:document-test",
	});
}

export default Component;
