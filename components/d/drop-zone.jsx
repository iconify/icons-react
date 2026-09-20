import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h38o_z5yr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h38o_z5yr"/>`,
		"fallback": "ix:drop-zone",
	});
}

export default Component;
