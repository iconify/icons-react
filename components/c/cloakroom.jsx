import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn9qti3en.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn9qti3en"/>`,
		"fallback": "wpf:cloakroom",
	});
}

export default Component;
