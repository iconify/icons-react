import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyfszws3d.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyfszws3d"/>`,
		"fallback": "f7:download-circle",
	});
}

export default Component;
