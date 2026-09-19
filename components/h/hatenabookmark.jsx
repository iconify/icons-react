import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng0uf7b-t.css';

const viewBox = {"width":650,"height":679};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng0uf7b-t"/>`,
		"fallback": "ls:hatenabookmark",
	});
}

export default Component;
