import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgj0q-b2w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgj0q-b2w"/>`,
		"fallback": "icon-park-outline:folder-conversion-one",
	});
}

export default Component;
