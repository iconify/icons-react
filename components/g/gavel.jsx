import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bn86mnb_m.css';
import '../../css/a/at9kptbty.css';
import '../../css/i/i4hn_5bow.css';
import '../../css/k/kng0k0-0g.css';
import '../../css/x/xayuqn0kz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="bn86mnb_m wm-shadow"/><path class="at9kptbty wm-shadow"/><path class="i4hn_5bow"/><path class="kng0k0-0g"/><path class="wm-s xayuqn0kz"/></g>`,
		"fallback": "withicons-brutal:gavel",
	});
}

export default Component;
