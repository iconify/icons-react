import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xka1fh12u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xka1fh12u"/>`,
		"fallback": "vadivam:folder-kanban",
	});
}

export default Component;
