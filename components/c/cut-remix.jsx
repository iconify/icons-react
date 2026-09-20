import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdrwgyy_b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xdrwgyy_b"/>`,
		"fallback": "streamline-plump:cut-remix",
	});
}

export default Component;
