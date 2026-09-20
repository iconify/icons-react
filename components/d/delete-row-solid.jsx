import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blt9aqlsc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="blt9aqlsc"/>`,
		"fallback": "streamline-plump:delete-row-solid",
	});
}

export default Component;
