import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncwk-2y5g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ncwk-2y5g"/>`,
		"fallback": "file-icons:adobe-photoshop",
	});
}

export default Component;
