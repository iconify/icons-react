import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aw31-0bot.css';
import '../../css/e/eq5wa5bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aw31-0bot"/><path class="eq5wa5bic"/></g>`,
		"fallback": "hugeicons:coming-soon-02",
	});
}

export default Component;
