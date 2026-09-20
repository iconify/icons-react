import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw2v_fbbh.css';
import '../../css/g/gu10zdn1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw2v_fbbh"/><path class="gu10zdn1y"/>`,
		"fallback": "lets-icons:file-duotone",
	});
}

export default Component;
