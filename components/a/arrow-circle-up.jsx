import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuqt_yb-q.css';
import '../../css/t/tk6h94bsl.css';
import '../../css/c/c6sfqyboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuqt_yb-q"/><path class="tk6h94bsl"/><path class="c6sfqyboe"/>`,
		"fallback": "prime:arrow-circle-up",
	});
}

export default Component;
