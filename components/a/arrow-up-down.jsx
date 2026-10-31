import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tbmbvfbqg.css';
import '../../css/v/v8hjqabrc.css';
import '../../css/w/wjn5xcccf.css';
import '../../css/l/loo-poa1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="tbmbvfbqg wm-shadow"/><path class="v8hjqabrc wm-shadow"/><path class="wjn5xcccf"/><path class="loo-poa1i"/></g>`,
		"fallback": "withicons-brutal:arrow-up-down",
	});
}

export default Component;
