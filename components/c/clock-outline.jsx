import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n74bk89qt.css';
import '../../css/j/jmu1l6njj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n74bk89qt"/><path clip-rule="evenodd" class="jmu1l6njj"/>`,
		"fallback": "basil:clock-outline",
	});
}

export default Component;
