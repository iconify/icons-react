import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3se7-35b.css';
import '../../css/d/dkh-5rbja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3se7-35b"/><path class="dkh-5rbja"/>`,
		"fallback": "bxs:cloud-rain",
	});
}

export default Component;
