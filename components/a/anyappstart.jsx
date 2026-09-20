import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdkeg8bno.css';
import '../../css/r/ro17tb5-g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="bdkeg8bno"/><path class="ro17tb5-g"/>`,
		"fallback": "selfhst:anyappstart",
	});
}

export default Component;
