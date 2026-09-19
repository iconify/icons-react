import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsv9zc4jv.css';
import '../../css/n/n74bk89qt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsv9zc4jv"/><path class="n74bk89qt"/>`,
		"fallback": "basil:history-solid",
	});
}

export default Component;
