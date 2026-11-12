import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o12gz742v.css';
import '../../css/v/v07hyobqv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="o12gz742v"/><path class="v07hyobqv"/>`,
		"fallback": "selfhst:alarmpi",
	});
}

export default Component;
