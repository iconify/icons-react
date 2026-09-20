import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q43qz1e2q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q43qz1e2q"/>`,
		"fallback": "streamline-plump:earpods-solid",
	});
}

export default Component;
