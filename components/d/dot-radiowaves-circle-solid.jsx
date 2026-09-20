import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idqc4jb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="idqc4jb8p"/>`,
		"fallback": "nrk:dot-radiowaves-circle-solid",
	});
}

export default Component;
