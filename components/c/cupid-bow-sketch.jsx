import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sswb-xb6m.css';
import '../../css/x/xtwfm-rnu.css';
import '../../css/o/oj9xnhw5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sswb-xb6m wm-a"/><path class="wm-k xtwfm-rnu"/><path class="oj9xnhw5p wm-a"/></g>`,
		"fallback": "withicons:cupid-bow-sketch",
	});
}

export default Component;
