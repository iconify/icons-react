import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-8pbhbod.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-8pbhbod"/>`,
		"fallback": "icon-park-outline:folder-success-one",
	});
}

export default Component;
