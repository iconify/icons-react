import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgn2xtoqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgn2xtoqc"/>`,
		"fallback": "streamline-sharp-color:arrow-transfer-horizontal-large-1",
	});
}

export default Component;
