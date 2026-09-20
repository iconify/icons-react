import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om0ku_p7k.css';
import '../../css/q/qcq6r3btc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om0ku_p7k"/><path class="qcq6r3btc"/>`,
		"fallback": "streamline-freehand:envelope-paper-document",
	});
}

export default Component;
