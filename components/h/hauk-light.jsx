import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5-noybbr.css';
import '../../css/v/v068-hf6n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5-noybbr"/><path class="v068-hf6n"/>`,
		"fallback": "selfhst:hauk-light",
	});
}

export default Component;
