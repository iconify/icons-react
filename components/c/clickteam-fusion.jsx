import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcsb00mcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcsb00mcp"/>`,
		"fallback": "thesvg-color:clickteam-fusion",
	});
}

export default Component;
