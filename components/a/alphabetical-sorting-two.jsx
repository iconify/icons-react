import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jro4d0bha.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jro4d0bha"/>`,
		"fallback": "icon-park-outline:alphabetical-sorting-two",
	});
}

export default Component;
