import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcgo9i_5e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcgo9i_5e"/>`,
		"fallback": "academicons:inspire",
	});
}

export default Component;
