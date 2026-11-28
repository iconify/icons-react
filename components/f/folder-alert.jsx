import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aichv3_pv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aichv3_pv"/>`,
		"fallback": "noviair-light:folder-alert",
	});
}

export default Component;
