import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlem8ibph.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlem8ibph"/>`,
		"fallback": "vaadin:comment-o",
	});
}

export default Component;
