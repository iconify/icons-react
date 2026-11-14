import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/twjtbteoq.css';
import '../../css/s/s24u-_nlg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="twjtbteoq"/><path class="s24u-_nlg"/></g>`,
		"fallback": "hugeicons:activity-02",
	});
}

export default Component;
