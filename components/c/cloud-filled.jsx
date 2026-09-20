import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh0km5biw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oh0km5biw"/>`,
		"fallback": "ix:cloud-filled",
	});
}

export default Component;
