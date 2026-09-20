import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imstw9b3l.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imstw9b3l"/>`,
		"fallback": "picon:candy",
	});
}

export default Component;
