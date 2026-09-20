import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmr2wt9_a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zmr2wt9_a"/>`,
		"fallback": "streamline:input-box-remix",
	});
}

export default Component;
