import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dff8bp7ci.css';
import '../../css/g/gpwxw0bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dff8bp7ci"/><path class="gpwxw0bmb"/>`,
		"fallback": "solar:dialog-2-bold",
	});
}

export default Component;
