import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqqsz-bhg.css';
import '../../css/j/j_opgppca.css';

const viewBox = {"width":166,"height":34};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqqsz-bhg prefix__path-mobile"/><path class="j_opgppca prefix__path-desktop"/>`,
		"fallback": "thesvg-color:godaddy-light",
	});
}

export default Component;
