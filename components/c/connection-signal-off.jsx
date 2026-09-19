import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on0krzm9t.css';
import '../../css/w/wdxgscteg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on0krzm9t"/><path class="wdxgscteg"/>`,
		"fallback": "carbon:connection-signal-off",
	});
}

export default Component;
