import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktt_d9eln.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktt_d9eln"/>`,
		"fallback": "picon:charging",
	});
}

export default Component;
