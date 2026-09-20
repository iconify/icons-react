import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irr05cczw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="irr05cczw"/>`,
		"fallback": "streamline:dhammajak-solid",
	});
}

export default Component;
