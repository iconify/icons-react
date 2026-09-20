import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkr2s5b1k.css';
import '../../css/c/c54521b1r.css';
import '../../css/a/as_-b_2sz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="lkr2s5b1k"/><path class="c54521b1r"/><path class="as_-b_2sz"/>`,
		"fallback": "selfhst:booklore",
	});
}

export default Component;
