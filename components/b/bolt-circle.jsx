import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9ovjc_7g.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9ovjc_7g"/>`,
		"fallback": "f7:bolt-circle",
	});
}

export default Component;
