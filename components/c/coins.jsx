import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lda6pabva.css';
import '../../css/t/ttouprbiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lda6pabva"/><path class="ttouprbiy"/>`,
		"fallback": "pixel:coins",
	});
}

export default Component;
