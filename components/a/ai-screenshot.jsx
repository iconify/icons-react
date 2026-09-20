import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cjmil0muy.css';
import '../../css/f/f3r6a78te.css';
import '../../css/l/ldpo4n3qb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cjmil0muy"/><path class="f3r6a78te"/><path class="ldpo4n3qb"/></g>`,
		"fallback": "tdesign:ai-screenshot",
	});
}

export default Component;
