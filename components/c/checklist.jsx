import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv094-b9m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv094-b9m"/>`,
		"fallback": "icon-park-outline:checklist",
	});
}

export default Component;
