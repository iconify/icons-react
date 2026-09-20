import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn31dub8v.css';
import '../../css/c/ce504-bmg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="fn31dub8v"/><path class="ce504-bmg"/>`,
		"fallback": "selfhst:backblaze",
	});
}

export default Component;
