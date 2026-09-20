import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/biuihtbcw.css';
import '../../css/n/nou84c3ti.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="biuihtbcw"/><path class="nou84c3ti"/>`,
		"fallback": "ooui:funnel-match-rtl",
	});
}

export default Component;
