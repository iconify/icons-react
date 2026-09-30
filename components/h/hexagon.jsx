import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcg03cc8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcg03cc8v"/>`,
		"fallback": "ix:hexagon",
	});
}

export default Component;
