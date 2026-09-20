import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2ng3jt7l.css';
import '../../css/j/j6bkybbuh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2ng3jt7l"/><path class="j6bkybbuh"/>`,
		"fallback": "vaadin:cog",
	});
}

export default Component;
