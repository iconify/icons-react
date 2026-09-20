import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f95-ijf-n.css';
import '../../css/a/axvhkf15f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f95-ijf-n"/><path class="axvhkf15f"/>`,
		"fallback": "material-icon-theme:folder-redux-reducer",
	});
}

export default Component;
