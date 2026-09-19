import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flfbxac5m.css';
import '../../css/u/u7znvqguw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flfbxac5m"/><path class="u7znvqguw"/>`,
		"fallback": "boxicons:coffee-beans-filled",
	});
}

export default Component;
