import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4jbqtvpk.css';
import '../../css/g/glxcbqcdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4jbqtvpk"/><path class="glxcbqcdo"/>`,
		"fallback": "stash:balance-solid",
	});
}

export default Component;
