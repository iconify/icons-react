import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6057zb0f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6057zb0f"/>`,
		"fallback": "selfhst:asterisk-dark",
	});
}

export default Component;
