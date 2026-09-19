import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geiclm85t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="geiclm85t"/>`,
		"fallback": "icon-park-outline:flag",
	});
}

export default Component;
