import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp83twbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qp83twbbr"/>`,
		"fallback": "nrk:dice-6-active",
	});
}

export default Component;
