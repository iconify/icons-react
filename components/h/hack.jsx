import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s88sv1bsn.css';

const viewBox = {"width":350,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s88sv1bsn"/>`,
		"fallback": "file-icons:hack",
	});
}

export default Component;
