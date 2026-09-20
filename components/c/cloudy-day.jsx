import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iqd9eybny.css';
import '../../css/o/olhl1pbiz.css';
import '../../css/k/kabl_cbkk.css';
import '../../css/w/w8scbbyql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iqd9eybny"/><path class="olhl1pbiz"/><path class="kabl_cbkk"/><path class="w8scbbyql"/></g>`,
		"fallback": "tdesign:cloudy-day",
	});
}

export default Component;
