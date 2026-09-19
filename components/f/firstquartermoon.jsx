import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej7zoc6ew.css';
import '../../css/l/lsyh92b0g.css';
import '../../css/k/kn7i6-6po.css';
import '../../css/r/rdosgs2oe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej7zoc6ew"/><path class="lsyh92b0g"/><path class="kn7i6-6po"/><path class="rdosgs2oe"/>`,
		"fallback": "fxemoji:firstquartermoon",
	});
}

export default Component;
