import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wqfje7aql.css';
import '../../css/o/ohk68lway.css';
import '../../css/t/tacb8eb4h.css';
import '../../css/s/sc9qw7bkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="wqfje7aql"/><path class="ohk68lway"/><path class="tacb8eb4h"/><path class="sc9qw7bkp"/></g>`,
		"fallback": "matita:briefcase",
	});
}

export default Component;
