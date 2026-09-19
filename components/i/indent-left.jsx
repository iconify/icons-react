import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7-z66pkw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7-z66pkw"/>`,
		"fallback": "icon-park-outline:indent-left",
	});
}

export default Component;
