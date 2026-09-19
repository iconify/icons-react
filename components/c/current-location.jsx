import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp8fatbpd.css';
import '../../css/d/dlc29abjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="gp8fatbpd"/><path class="dlc29abjm"/>`,
		"fallback": "bx:current-location",
	});
}

export default Component;
