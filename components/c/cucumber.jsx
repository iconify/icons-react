import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz4vi98el.css';

const viewBox = {"width":33,"height":33};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz4vi98el"/>`,
		"fallback": "material-icon-theme:cucumber",
	});
}

export default Component;
