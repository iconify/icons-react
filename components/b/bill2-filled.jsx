import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmbd_tb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lmbd_tb3t"/>`,
		"fallback": "reicon:bill2-filled",
	});
}

export default Component;
