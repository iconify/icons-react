import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpz4-dbvp.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpz4-dbvp"/>`,
		"fallback": "picon:broom",
	});
}

export default Component;
