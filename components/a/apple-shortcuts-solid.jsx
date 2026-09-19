import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iu-_yjbnb.css';
import '../../css/v/vki4afb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iu-_yjbnb"/><path class="vki4afb8k"/></g>`,
		"fallback": "iconoir:apple-shortcuts-solid",
	});
}

export default Component;
