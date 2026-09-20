import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfrefdafx.css';
import '../../css/c/cion4p3li.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfrefdafx"/><path class="cion4p3li"/>`,
		"fallback": "selfhst:fmd-dark",
	});
}

export default Component;
