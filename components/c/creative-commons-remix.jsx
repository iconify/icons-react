import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1b780u_o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n1b780u_o"/>`,
		"fallback": "streamline-plump:creative-commons-remix",
	});
}

export default Component;
