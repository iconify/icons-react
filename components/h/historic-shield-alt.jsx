import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kghif2ogu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kghif2ogu"/>`,
		"fallback": "iconoir:historic-shield-alt",
	});
}

export default Component;
