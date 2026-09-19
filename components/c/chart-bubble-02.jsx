import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o5dnc48bh.css';
import '../../css/v/v2xh89b7y.css';
import '../../css/c/c_63rybwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="o5dnc48bh"/><circle class="v2xh89b7y"/><circle class="c_63rybwj"/></g>`,
		"fallback": "hugeicons:chart-bubble-02",
	});
}

export default Component;
