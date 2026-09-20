import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpub25bol.css';
import '../../css/j/jqfr0dnja.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpub25bol"/><path class="jqfr0dnja"/>`,
		"fallback": "material-icon-theme:folder-trash-open",
	});
}

export default Component;
