import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3u869byd.css';
import '../../css/a/ad-jgcc6y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3u869byd"/><path class="ad-jgcc6y"/>`,
		"fallback": "material-icon-theme:godot",
	});
}

export default Component;
