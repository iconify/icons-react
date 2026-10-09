import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw9yj186n.css';
import '../../css/w/waz_2hbmd.css';
import '../../css/n/ne31ywxgx.css';
import '../../css/a/ani345bpd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw9yj186n"/><path class="waz_2hbmd"/><path class="ne31ywxgx"/><path class="ani345bpd"/>`,
		"fallback": "energy-icons:carbon-capture-20",
	});
}

export default Component;
