import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phqysqbjw.css';
import '../../css/d/dinarbh3t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phqysqbjw"/><path class="dinarbh3t"/>`,
		"fallback": "material-icon-theme:handlebars",
	});
}

export default Component;
