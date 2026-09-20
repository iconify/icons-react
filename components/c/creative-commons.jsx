import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo7q9nu5a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo7q9nu5a"/>`,
		"fallback": "la:creative-commons",
	});
}

export default Component;
