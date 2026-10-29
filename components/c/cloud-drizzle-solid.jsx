import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t-p51h91p.css';
import '../../css/s/sv174dljy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="t-p51h91p"/><path class="sv174dljy wm-a"/></g>`,
		"fallback": "withicons:cloud-drizzle-solid",
	});
}

export default Component;
