import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw30mccjj.css';
import '../../css/w/w-fm7jz3a.css';
import '../../css/i/idx93qbfz.css';
import '../../css/c/cf9gd76rf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw30mccjj"/><circle class="w-fm7jz3a"/><path class="idx93qbfz"/><path class="cf9gd76rf"/>`,
		"fallback": "selfhst:cloudreve-light",
	});
}

export default Component;
