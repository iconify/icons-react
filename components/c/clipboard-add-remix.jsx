import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj_-k2_7g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oj_-k2_7g"/>`,
		"fallback": "streamline:clipboard-add-remix",
	});
}

export default Component;
