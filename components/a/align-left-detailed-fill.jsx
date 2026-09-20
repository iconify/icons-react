import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x37ks3dss.css';
import '../../css/i/i8iix-ktc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x37ks3dss"/><path clip-rule="evenodd" class="i8iix-ktc"/>`,
		"fallback": "si:align-left-detailed-fill",
	});
}

export default Component;
