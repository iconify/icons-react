import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-6sj7bos.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-6sj7bos"/>`,
		"fallback": "icon-park:four",
	});
}

export default Component;
