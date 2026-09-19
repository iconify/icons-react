import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es8mo68gx.css';
import '../../css/c/cdj2jkbik.css';
import '../../css/p/p91j9gb3y.css';
import '../../css/b/bl5dnqrrh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es8mo68gx"/><path class="cdj2jkbik"/><path class="p91j9gb3y"/><path class="bl5dnqrrh"/>`,
		"fallback": "fxemoji:inboxtray",
	});
}

export default Component;
