import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fctujlv1j.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fctujlv1j"/>`,
		"fallback": "garden:arrow-right-left-26",
	});
}

export default Component;
