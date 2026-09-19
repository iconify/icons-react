import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir6w98bve.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir6w98bve"/>`,
		"fallback": "icon-park-outline:add-four",
	});
}

export default Component;
