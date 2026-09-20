import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgmse4pkc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgmse4pkc"/>`,
		"fallback": "selfhst:disney-plus-light",
	});
}

export default Component;
