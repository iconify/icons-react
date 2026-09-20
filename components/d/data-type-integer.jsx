import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf77ywbva.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tf77ywbva"/>`,
		"fallback": "ix:data-type-integer",
	});
}

export default Component;
