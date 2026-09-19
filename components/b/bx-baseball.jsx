import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a588ydb6o.css';
import '../../css/a/axujlccoc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a588ydb6o"/><path class="axujlccoc"/>`,
		"fallback": "bx:bx-baseball",
	});
}

export default Component;
