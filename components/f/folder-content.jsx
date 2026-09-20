import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct2bdybif.css';
import '../../css/j/jh04-5upe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct2bdybif"/><path class="jh04-5upe"/>`,
		"fallback": "material-icon-theme:folder-content",
	});
}

export default Component;
