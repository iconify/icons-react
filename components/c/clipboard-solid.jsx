import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3eno4b5g.css';
import '../../css/b/b2gz5jqgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3eno4b5g"/><path class="b2gz5jqgb"/>`,
		"fallback": "pixel:clipboard-solid",
	});
}

export default Component;
