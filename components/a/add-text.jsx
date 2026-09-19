import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7mgxib6l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7mgxib6l"/>`,
		"fallback": "icon-park-outline:add-text",
	});
}

export default Component;
