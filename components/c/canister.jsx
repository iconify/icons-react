import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbqt8vb3b.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbqt8vb3b"/>`,
		"fallback": "whh:canister",
	});
}

export default Component;
