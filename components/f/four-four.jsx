import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acpb1078r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acpb1078r"/>`,
		"fallback": "icon-park:four-four",
	});
}

export default Component;
