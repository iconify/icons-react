import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/a4t2l3b2j.css';
import '../../css/g/gf1va6b2r.css';
import '../../css/l/ltafvnejl.css';
import '../../css/c/crw-jwbli.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="a4t2l3b2j"/><path class="gf1va6b2r"/><path class="ltafvnejl"/><path class="crw-jwbli"/></g>`,
		"fallback": "streamline-plump-color:facebook-1",
	});
}

export default Component;
