import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk7w0m4zb.css';
import '../../css/d/dfm4qxg6q.css';
import '../../css/a/amyi9lblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk7w0m4zb"/><path class="dfm4qxg6q"/><path clip-rule="evenodd" class="amyi9lblt"/>`,
		"fallback": "token:idv",
	});
}

export default Component;
