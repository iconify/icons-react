import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz3ws0e7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz3ws0e7f"/>`,
		"fallback": "icon-park-outline:hi",
	});
}

export default Component;
