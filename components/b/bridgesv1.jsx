import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqer2gnrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqer2gnrm"/>`,
		"fallback": "cbi:bridgesv1",
	});
}

export default Component;
