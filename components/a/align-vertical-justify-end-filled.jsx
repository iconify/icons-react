import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0si7bc9c.css';
import '../../css/c/c7ja4vb8i.css';
import '../../css/k/knqltxb3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="m0si7bc9c"/><rect class="c7ja4vb8i"/><path class="knqltxb3q"/>`,
		"fallback": "boxicons:align-vertical-justify-end-filled",
	});
}

export default Component;
