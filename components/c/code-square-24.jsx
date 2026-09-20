import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmjreii-g.css';
import '../../css/t/tbcp7-bab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmjreii-g"/><path class="tbcp7-bab"/>`,
		"fallback": "octicon:code-square-24",
	});
}

export default Component;
