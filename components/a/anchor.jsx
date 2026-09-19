import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajwoxmb6i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajwoxmb6i"/>`,
		"fallback": "fluent-emoji-high-contrast:anchor",
	});
}

export default Component;
