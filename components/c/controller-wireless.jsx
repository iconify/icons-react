import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng060o56g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng060o56g"/>`,
		"fallback": "streamline-flex:controller-wireless",
	});
}

export default Component;
