import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc-o5ilbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oc-o5ilbk"/>`,
		"fallback": "token:hero",
	});
}

export default Component;
