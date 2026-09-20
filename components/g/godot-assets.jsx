import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmkq3nmdi.css';
import '../../css/g/g2yfz6ydr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmkq3nmdi"/><path class="g2yfz6ydr"/>`,
		"fallback": "material-icon-theme:godot-assets",
	});
}

export default Component;
