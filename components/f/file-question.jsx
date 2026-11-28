import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu66rw_rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu66rw_rr"/>`,
		"fallback": "noviair:file-question",
	});
}

export default Component;
