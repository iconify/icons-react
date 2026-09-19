import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn4aefjsn.css';

const viewBox = {"width":360,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn4aefjsn"/>`,
		"fallback": "file-icons:browsersync",
	});
}

export default Component;
