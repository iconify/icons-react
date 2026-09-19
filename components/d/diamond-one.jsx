import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1crm4r6k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1crm4r6k"/>`,
		"fallback": "icon-park-outline:diamond-one",
	});
}

export default Component;
