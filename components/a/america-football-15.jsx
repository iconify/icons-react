import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj25bjbhv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj25bjbhv"/>`,
		"fallback": "maki:america-football-15",
	});
}

export default Component;
