import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2e05bcja.css';
import '../../css/v/vojou6b4q.css';
import '../../css/f/f4pvf8bfr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2e05bcja"/><path class="vojou6b4q"/><path class="f4pvf8bfr"/>`,
		"fallback": "selfhst:colota-light",
	});
}

export default Component;
