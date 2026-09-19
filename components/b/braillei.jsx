import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcdkupb4y.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcdkupb4y"/>`,
		"fallback": "whh:braillei",
	});
}

export default Component;
