import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbwwa7bij.css';

const viewBox = {"width":422,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbwwa7bij"/>`,
		"fallback": "file-icons:babel",
	});
}

export default Component;
