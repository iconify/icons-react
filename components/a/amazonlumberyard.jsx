import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsa2r967w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsa2r967w"/>`,
		"fallback": "simple-icons:amazonlumberyard",
	});
}

export default Component;
