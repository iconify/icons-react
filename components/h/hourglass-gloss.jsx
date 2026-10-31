import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma_trn-xv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma_trn-xv"/>`,
		"fallback": "withicons:hourglass-gloss",
	});
}

export default Component;
