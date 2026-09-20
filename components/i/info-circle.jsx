import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb28rvm0p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb28rvm0p"/>`,
		"fallback": "vaadin:info-circle",
	});
}

export default Component;
