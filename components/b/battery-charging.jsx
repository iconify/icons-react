import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcis7r43e.css';
import '../../css/r/rgfwyacmh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcis7r43e"/><path class="rgfwyacmh"/>`,
		"fallback": "carbon:battery-charging",
	});
}

export default Component;
