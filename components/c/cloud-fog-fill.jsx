import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osz643t2a.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osz643t2a"/>`,
		"fallback": "f7:cloud-fog-fill",
	});
}

export default Component;
