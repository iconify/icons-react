import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rog1hobvm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rog1hobvm"/>`,
		"fallback": "material-icon-theme:asciidoc",
	});
}

export default Component;
