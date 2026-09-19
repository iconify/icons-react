import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbrg86wua.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbrg86wua"/>`,
		"fallback": "f7:exclamationmark-circle-fill",
	});
}

export default Component;
