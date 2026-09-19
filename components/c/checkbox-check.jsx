import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to07rdbdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to07rdbdn"/>`,
		"fallback": "ci:checkbox-check",
	});
}

export default Component;
