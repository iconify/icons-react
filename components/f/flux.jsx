import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mte30snjo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mte30snjo"/>`,
		"fallback": "file-icons:flux",
	});
}

export default Component;
