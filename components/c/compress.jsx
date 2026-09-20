import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iinp-rb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iinp-rb_f"/>`,
		"fallback": "uis:compress",
	});
}

export default Component;
