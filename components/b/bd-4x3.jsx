import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2x54nbfw.css';
import '../../css/c/c41bz1boa.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2x54nbfw"/><circle class="c41bz1boa"/>`,
		"fallback": "flag:bd-4x3",
	});
}

export default Component;
