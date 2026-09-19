import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz_8dhp3p.css';
import '../../css/v/v85x6e0bv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz_8dhp3p"/><path class="v85x6e0bv"/>`,
		"fallback": "bx:code-block",
	});
}

export default Component;
