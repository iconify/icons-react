import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2ps7fgra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2ps7fgra"/>`,
		"fallback": "andrsrxn:arrows-start-end",
	});
}

export default Component;
