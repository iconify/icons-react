import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcn-j_bia.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xcn-j_bia"/>`,
		"fallback": "streamline-flex:download-box-1-remix",
	});
}

export default Component;
