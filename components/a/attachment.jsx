import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q53a_eb2i.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q53a_eb2i"/>`,
		"fallback": "marketeq:attachment",
	});
}

export default Component;
