import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk_rluugm.css';
import '../../css/a/aftham49l.css';
import '../../css/s/s17eudbyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k yk_rluugm"/><path class="aftham49l wm-k"/><path class="s17eudbyu wm-a"/>`,
		"fallback": "withicons-bauhaus:donut",
	});
}

export default Component;
