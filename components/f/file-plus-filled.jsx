import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qos0h86tn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qos0h86tn"/>`,
		"fallback": "griddy-icons:file-plus-filled",
	});
}

export default Component;
