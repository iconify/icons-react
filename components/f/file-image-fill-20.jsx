import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cup6pv9rx.css';
import '../../css/j/j11y15vpo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cup6pv9rx"/><path class="j11y15vpo"/>`,
		"fallback": "garden:file-image-fill-20",
	});
}

export default Component;
