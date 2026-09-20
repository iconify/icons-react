import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4p_l0bnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o4p_l0bnc"/>`,
		"fallback": "reicon:compass2",
	});
}

export default Component;
