import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwb8jdbjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwb8jdbjf"/>`,
		"fallback": "lucide:asterisk",
	});
}

export default Component;
