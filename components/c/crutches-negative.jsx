import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6zxgccaz.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yagot-q3u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="healthiconsCrutchesNegative0" class="d6zxgccaz"/></defs><g class="ft5dv1b6b"><g clip-path="url(#healthiconsCrutchesNegative1)"><use href="#healthiconsCrutchesNegative0"/><path clip-rule="evenodd" class="yagot-q3u"/></g><defs><clipPath id="healthiconsCrutchesNegative1"><use href="#healthiconsCrutchesNegative0"/></clipPath></defs></g>`,
		"fallback": "healthicons:crutches-negative",
	});
}

export default Component;
