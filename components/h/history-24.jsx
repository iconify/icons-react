import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hohcf3gsm.css';
import '../../css/b/bmavll4ox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hohcf3gsm"/><path class="bmavll4ox"/>`,
		"fallback": "octicon:history-24",
	});
}

export default Component;
