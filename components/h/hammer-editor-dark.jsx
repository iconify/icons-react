import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjt07rb4y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjt07rb4y"/>`,
		"fallback": "selfhst:hammer-editor-dark",
	});
}

export default Component;
