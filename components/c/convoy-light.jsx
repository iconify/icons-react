import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2agh85ja.css';
import '../../css/l/l0ifl0rlq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2agh85ja"/><path class="l0ifl0rlq"/>`,
		"fallback": "selfhst:convoy-light",
	});
}

export default Component;
