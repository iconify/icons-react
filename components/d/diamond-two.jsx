import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyd4gcyqt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyd4gcyqt"/>`,
		"fallback": "icon-park:diamond-two",
	});
}

export default Component;
