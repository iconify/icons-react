import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjhi1nb3h.css';
import '../../css/v/vtl91obdm.css';
import '../../css/b/bwrwnlb7x.css';
import '../../css/c/cnrul6y8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjhi1nb3h wm-k"/><path class="vtl91obdm wm-k"/><path class="bwrwnlb7x wm-k"/><path class="cnrul6y8o wm-a"/>`,
		"fallback": "withicons-bauhaus:atom",
	});
}

export default Component;
