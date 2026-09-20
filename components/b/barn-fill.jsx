import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgbi-149m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qgbi-149m"/>`,
		"fallback": "si:barn-fill",
	});
}

export default Component;
