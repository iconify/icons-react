import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e79s1fb2n.css';

const viewBox = {"width":981.393,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e79s1fb2n"/>`,
		"fallback": "brandico:icq",
	});
}

export default Component;
