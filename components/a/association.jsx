import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz5v46qeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz5v46qeo"/>`,
		"fallback": "icon-park-outline:association",
	});
}

export default Component;
