import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzyi55b4n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzyi55b4n"/>`,
		"fallback": "file-icons:config-rust",
	});
}

export default Component;
