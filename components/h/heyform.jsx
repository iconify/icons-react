import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj-lznb8w.css';
import '../../css/h/hq5gb_4kr.css';
import '../../css/i/iv7xugjxy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj-lznb8w"/><path class="hq5gb_4kr"/><path class="iv7xugjxy"/>`,
		"fallback": "selfhst:heyform",
	});
}

export default Component;
