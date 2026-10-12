import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o72q1jmah.css';
import '../../css/j/j11y15vpo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o72q1jmah"/><path class="j11y15vpo"/>`,
		"fallback": "garden:file-error-fill-20",
	});
}

export default Component;
