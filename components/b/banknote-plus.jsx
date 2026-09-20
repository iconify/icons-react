import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urbb0o_je.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urbb0o_je"/>`,
		"fallback": "keyline-icons:banknote-plus",
	});
}

export default Component;
