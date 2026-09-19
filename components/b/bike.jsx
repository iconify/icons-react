import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye-mnojip.css';
import '../../css/i/i69vb9b6y.css';
import '../../css/i/i8ac7e7vw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye-mnojip"/><circle class="i69vb9b6y"/><path class="i8ac7e7vw"/>`,
		"fallback": "cil:bike",
	});
}

export default Component;
