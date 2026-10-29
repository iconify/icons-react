import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vescuyerh.css';
import '../../css/d/dyrbljpdb.css';
import '../../css/a/a-a796b8n.css';
import '../../css/g/g2xumw4-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vescuyerh wm-k"/><path class="dyrbljpdb wm-a"/><path class="a-a796b8n wm-k"/><path class="g2xumw4-o wm-a"/></g>`,
		"fallback": "withicons:code-xml-sketch",
	});
}

export default Component;
