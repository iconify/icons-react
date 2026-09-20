import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rex75jb-y.css';
import '../../css/c/cv_qrx7lo.css';
import '../../css/k/kn5t4v-6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rex75jb-y"/><path class="cv_qrx7lo"/><path class="kn5t4v-6j"/>`,
		"fallback": "token:bitkub-chain",
	});
}

export default Component;
