import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1ckqlb3r.css';
import '../../css/l/lhsg4trxw.css';
import '../../css/o/ozsbau3sa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1ckqlb3r"/><path class="lhsg4trxw"/><path class="ozsbau3sa"/>`,
		"fallback": "energy-icons:gavel-20-bold",
	});
}

export default Component;
