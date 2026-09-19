import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6qo4yo6a.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6qo4yo6a"/>`,
		"fallback": "fa6-solid:chess-bishop",
	});
}

export default Component;
