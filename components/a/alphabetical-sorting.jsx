import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8kqphb8i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8kqphb8i"/>`,
		"fallback": "icon-park-outline:alphabetical-sorting",
	});
}

export default Component;
