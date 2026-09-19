import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-wvqqbgn.css';
import '../../css/k/k6cv4hiap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-wvqqbgn"/><path clip-rule="evenodd" class="k6cv4hiap"/>`,
		"fallback": "basil:flask-outline",
	});
}

export default Component;
