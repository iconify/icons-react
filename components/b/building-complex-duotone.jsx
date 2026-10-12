import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekket2bzx.css';
import '../../css/p/pm-7cceht.css';
import '../../css/c/ctxwr35tf.css';
import '../../css/x/xeew2cc-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ekket2bzx"/><path class="pm-7cceht"/><path class="ctxwr35tf"/><path class="xeew2cc-m"/></g>`,
		"fallback": "lucide-extended:building-complex-duotone",
	});
}

export default Component;
