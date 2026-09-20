import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_sjz8b4l.css';
import '../../css/c/c080srerl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_sjz8b4l"/><path class="c080srerl"/>`,
		"fallback": "uim:html5",
	});
}

export default Component;
