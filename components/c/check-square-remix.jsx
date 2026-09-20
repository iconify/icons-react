import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrv-p4bqk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jrv-p4bqk"/>`,
		"fallback": "streamline:check-square-remix",
	});
}

export default Component;
