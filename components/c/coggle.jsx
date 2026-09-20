import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udbs4h_qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udbs4h_qw"/>`,
		"fallback": "thesvg-color:coggle",
	});
}

export default Component;
