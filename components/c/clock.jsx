import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmk826btk.css';
import '../../css/f/f6hca-bnv.css';
import '../../css/f/fpr104b-q.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmk826btk"/><path class="f6hca-bnv"/><path class="fpr104b-q"/>`,
		"fallback": "ep:clock",
	});
}

export default Component;
