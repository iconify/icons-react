import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqvu3hb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqvu3hb2j"/>`,
		"fallback": "cbi:globoplay",
	});
}

export default Component;
