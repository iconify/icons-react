import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixgen_bbp.css';

const viewBox = {"width":1024,"height":832};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixgen_bbp"/>`,
		"fallback": "whh:etano",
	});
}

export default Component;
