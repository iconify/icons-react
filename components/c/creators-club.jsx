import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6c56ebta.css';
import '../../css/u/ulpze-4na.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6c56ebta"/><path class="ulpze-4na"/>`,
		"fallback": "stash:creators-club",
	});
}

export default Component;
