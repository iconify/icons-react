import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_qro1bcg.css';

const viewBox = {"width":750,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_qro1bcg"/>`,
		"fallback": "il:clock",
	});
}

export default Component;
