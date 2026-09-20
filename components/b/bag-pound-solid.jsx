import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omj9s4z0k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="omj9s4z0k"/>`,
		"fallback": "streamline:bag-pound-solid",
	});
}

export default Component;
