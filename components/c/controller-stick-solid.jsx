import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llz977bqw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="llz977bqw"/>`,
		"fallback": "streamline-flex:controller-stick-solid",
	});
}

export default Component;
