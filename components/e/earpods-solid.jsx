import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3x2j_b1d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g3x2j_b1d"/>`,
		"fallback": "streamline:earpods-solid",
	});
}

export default Component;
