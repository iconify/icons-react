import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za_zbub4l.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za_zbub4l"/>`,
		"fallback": "f7:bolt-badge-a",
	});
}

export default Component;
