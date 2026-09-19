import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xladmeg4g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xladmeg4g"/>`,
		"fallback": "file-icons:digdag",
	});
}

export default Component;
