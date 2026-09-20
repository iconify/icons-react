import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhp05tb6w.css';
import '../../css/j/j2qm6zb1r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhp05tb6w"/><path class="j2qm6zb1r"/>`,
		"fallback": "selfhst:globaleaks",
	});
}

export default Component;
