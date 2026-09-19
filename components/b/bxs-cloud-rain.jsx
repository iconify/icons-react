import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk7827bhk.css';
import '../../css/d/dkh-5rbja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk7827bhk"/><path class="dkh-5rbja"/>`,
		"fallback": "bx:bxs-cloud-rain",
	});
}

export default Component;
