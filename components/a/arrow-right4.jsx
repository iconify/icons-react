import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el-_qkqtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el-_qkqtx"/>`,
		"fallback": "reicon:arrow-right4",
	});
}

export default Component;
