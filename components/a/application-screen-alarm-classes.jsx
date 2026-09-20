import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp7u0ab4b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mp7u0ab4b"/>`,
		"fallback": "ix:application-screen-alarm-classes",
	});
}

export default Component;
