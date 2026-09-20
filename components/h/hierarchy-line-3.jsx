import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tebc0xb-f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tebc0xb-f"/>`,
		"fallback": "streamline-flex-color:hierarchy-line-3",
	});
}

export default Component;
