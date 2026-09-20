import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh25lk38h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hh25lk38h"/>`,
		"fallback": "reicon:compress",
	});
}

export default Component;
