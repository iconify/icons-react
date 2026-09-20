import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl_mq0bip.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vl_mq0bip"/>`,
		"fallback": "streamline:code-analysis-remix",
	});
}

export default Component;
