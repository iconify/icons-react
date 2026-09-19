import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i975fgb9j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i975fgb9j"/>`,
		"fallback": "icon-park:five",
	});
}

export default Component;
