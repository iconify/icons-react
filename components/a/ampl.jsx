import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p29-zfr-n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p29-zfr-n"/>`,
		"fallback": "file-icons:ampl",
	});
}

export default Component;
