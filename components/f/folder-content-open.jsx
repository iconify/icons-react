import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3gib6vnb.css';
import '../../css/j/jh04-5upe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3gib6vnb"/><path class="jh04-5upe"/>`,
		"fallback": "material-icon-theme:folder-content-open",
	});
}

export default Component;
