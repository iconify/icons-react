import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdzr79dwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdzr79dwu"/>`,
		"fallback": "noviair:file-zip-x",
	});
}

export default Component;
