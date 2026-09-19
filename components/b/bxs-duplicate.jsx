import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puqv5u2-o.css';
import '../../css/n/ngen2gb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puqv5u2-o"/><path class="ngen2gb7b"/>`,
		"fallback": "bx:bxs-duplicate",
	});
}

export default Component;
