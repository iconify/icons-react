import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1h2ywb3p.css';
import '../../css/z/z4pv5t1oe.css';
import '../../css/u/ub1afpn4a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1h2ywb3p"/><path class="z4pv5t1oe"/><path class="ub1afpn4a"/>`,
		"fallback": "ant-design:file-unknown-twotone",
	});
}

export default Component;
