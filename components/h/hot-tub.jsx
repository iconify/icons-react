import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0edu0xjc.css';
import '../../css/e/egv45zsgc.css';
import '../../css/g/gjagb39hl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="g0edu0xjc"/><path class="egv45zsgc"/><path class="gjagb39hl"/>`,
		"fallback": "cil:hot-tub",
	});
}

export default Component;
