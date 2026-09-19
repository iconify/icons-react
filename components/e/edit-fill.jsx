import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6ih8ibvc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6ih8ibvc"/>`,
		"fallback": "ant-design:edit-fill",
	});
}

export default Component;
