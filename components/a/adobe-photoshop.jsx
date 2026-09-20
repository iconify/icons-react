import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fonifab6t.css';
import '../../css/q/qpkq3pbej.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="fonifab6t"/><path class="qpkq3pbej"/>`,
		"fallback": "material-icon-theme:adobe-photoshop",
	});
}

export default Component;
