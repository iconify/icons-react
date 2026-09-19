import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p26865b9t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p26865b9t"/>`,
		"fallback": "icon-park-outline:bad-two",
	});
}

export default Component;
