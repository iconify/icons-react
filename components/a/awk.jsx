import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stss5vbih.css';

const viewBox = {"width":491,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stss5vbih"/>`,
		"fallback": "file-icons:awk",
	});
}

export default Component;
