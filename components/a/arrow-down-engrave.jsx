import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o2xigkb2l.css';
import '../../css/l/l-_y4mb5v.css';
import '../../css/l/lgrfglb5a.css';
import '../../css/r/r7xk8o29f.css';
import '../../css/e/eaf3bdbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="o2xigkb2l wm-k"/><path class="l-_y4mb5v wm-a"/><path class="lgrfglb5a wm-shadow"/><path class="r7xk8o29f wm-k"/><path class="eaf3bdbfh wm-a"/></g>`,
		"fallback": "withicons:arrow-down-engrave",
	});
}

export default Component;
