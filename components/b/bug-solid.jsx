import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmc5rlb_r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cmc5rlb_r"/>`,
		"fallback": "streamline:bug-solid",
	});
}

export default Component;
