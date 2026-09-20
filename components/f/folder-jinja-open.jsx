import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulas4swoq.css';
import '../../css/w/wx0-_tbhy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulas4swoq"/><path class="wx0-_tbhy"/>`,
		"fallback": "material-icon-theme:folder-jinja-open",
	});
}

export default Component;
