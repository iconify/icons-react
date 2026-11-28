import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmytp6btb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kkh72vl5e.css';
import '../../css/i/ix1a3ybiw.css';
import '../../css/h/hve8fgbma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmytp6btb secondary"/><g class="dt0cm9dhy primary"><path class="kkh72vl5e"/><path class="ix1a3ybiw"/><path class="hve8fgbma"/></g>`,
		"fallback": "iconaut:eraser-duo",
	});
}

export default Component;
