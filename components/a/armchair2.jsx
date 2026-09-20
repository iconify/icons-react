import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze611lb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ze611lb2h"/>`,
		"fallback": "reicon:armchair2",
	});
}

export default Component;
