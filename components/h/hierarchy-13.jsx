import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpbc8_o4g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpbc8_o4g"/>`,
		"fallback": "streamline:hierarchy-13",
	});
}

export default Component;
