import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp5kgf0wk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hp5kgf0wk"/>`,
		"fallback": "streamline-plump:graph-bar-increase-solid",
	});
}

export default Component;
