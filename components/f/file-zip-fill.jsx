import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaebsod0a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaebsod0a"/>`,
		"fallback": "ant-design:file-zip-fill",
	});
}

export default Component;
