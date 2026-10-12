import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7oerkp_t.css';
import '../../css/j/j11y15vpo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7oerkp_t"/><path class="j11y15vpo"/>`,
		"fallback": "garden:file-document-fill-20",
	});
}

export default Component;
