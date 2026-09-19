import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlc5p2mlg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlc5p2mlg"/>`,
		"fallback": "icon-park:bat",
	});
}

export default Component;
