import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gscn4tkwp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gscn4tkwp"/>`,
		"fallback": "file-icons:config",
	});
}

export default Component;
