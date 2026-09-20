import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnnf_6h8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnnf_6h8j"/>`,
		"fallback": "thesvg-color:bulma",
	});
}

export default Component;
