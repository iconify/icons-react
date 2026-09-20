import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_tvfq6mb.css';
import '../../css/t/tfa5mdbsb.css';
import '../../css/i/iufs412sl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_tvfq6mb"/><path class="tfa5mdbsb"/><path class="iufs412sl"/>`,
		"fallback": "selfhst:finn-dark",
	});
}

export default Component;
