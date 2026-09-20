import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg3cztqhx.css';
import '../../css/d/dedjm9gwi.css';
import '../../css/d/d9jjm8sgu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg3cztqhx"/><path class="dedjm9gwi"/><path class="d9jjm8sgu"/>`,
		"fallback": "selfhst:chorizard",
	});
}

export default Component;
