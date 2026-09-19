import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-u4xnbot.css';
import '../../css/b/b1gskgvdy.css';
import '../../css/s/svdy80z7e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-u4xnbot"/><path class="b1gskgvdy"/><path class="svdy80z7e"/>`,
		"fallback": "carbon:accessibility-color",
	});
}

export default Component;
