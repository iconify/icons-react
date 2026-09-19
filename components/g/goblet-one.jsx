import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/o/of0pntlrh.css';
import '../../css/u/us-43-0od.css';
import '../../css/x/x3o8e895h.css';
import '../../css/b/bl4gd2e5a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="of0pntlrh"/><path class="us-43-0od"/><ellipse transform="rotate(-45 14 14)" class="x3o8e895h"/><ellipse transform="rotate(-45 38 38)" class="bl4gd2e5a"/></g>`,
		"fallback": "icon-park:goblet-one",
	});
}

export default Component;
