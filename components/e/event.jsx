import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8efn-fzv.css';

const viewBox = {"width":1025,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8efn-fzv"/>`,
		"fallback": "whh:event",
	});
}

export default Component;
