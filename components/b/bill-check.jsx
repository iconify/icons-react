import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmjag8bhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lmjag8bhq"/>`,
		"fallback": "reicon:bill-check",
	});
}

export default Component;
