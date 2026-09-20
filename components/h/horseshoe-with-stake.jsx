import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmy8lab0o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmy8lab0o"/>`,
		"fallback": "pinhead:horseshoe-with-stake",
	});
}

export default Component;
