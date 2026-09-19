import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl3qt1b5o.css';
import '../../css/o/o6g1-kwkw.css';
import '../../css/l/l2uqvu0mm.css';
import '../../css/d/dygyyv64v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl3qt1b5o"/><path class="o6g1-kwkw"/><path class="l2uqvu0mm"/><path class="dygyyv64v"/>`,
		"fallback": "fxemoji:bluebook",
	});
}

export default Component;
