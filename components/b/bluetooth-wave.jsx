import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qycm1k8wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qycm1k8wk"/>`,
		"fallback": "reicon:bluetooth-wave",
	});
}

export default Component;
