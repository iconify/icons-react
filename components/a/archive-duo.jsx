import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6-sdvapm.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/imag2ybny.css';
import '../../css/f/f3_b4ijst.css';
import '../../css/b/bqtd5gbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6-sdvapm secondary"/><g class="dt0cm9dhy primary"><path class="imag2ybny"/><path class="f3_b4ijst"/><path class="bqtd5gbgu"/></g>`,
		"fallback": "iconaut:archive-duo",
	});
}

export default Component;
