import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd2-gvknj.css';
import '../../css/n/niw2nrbra.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd2-gvknj"/><path class="niw2nrbra"/>`,
		"fallback": "selfhst:facebook",
	});
}

export default Component;
