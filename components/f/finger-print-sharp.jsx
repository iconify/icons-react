import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsowlmztv.css';
import '../../css/l/lvv06sbtq.css';
import '../../css/y/yji9ggb8t.css';
import '../../css/q/q_zarvbqj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsowlmztv"/><path class="lvv06sbtq"/><path class="yji9ggb8t"/><path class="q_zarvbqj"/>`,
		"fallback": "ion:finger-print-sharp",
	});
}

export default Component;
