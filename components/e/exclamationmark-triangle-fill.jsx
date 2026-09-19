import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i29s6sbfr.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i29s6sbfr"/>`,
		"fallback": "f7:exclamationmark-triangle-fill",
	});
}

export default Component;
