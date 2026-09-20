import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5fxn4-5j.css';
import '../../css/o/oxa9fqbrc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5fxn4-5j"/><path class="oxa9fqbrc"/>`,
		"fallback": "material-icon-theme:folder-kusto",
	});
}

export default Component;
