import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qndo5pb1f.css';
import '../../css/g/gi1zq4blx.css';
import '../../css/d/doic5013b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qndo5pb1f"/><path class="gi1zq4blx"/><path class="doic5013b"/>`,
		"fallback": "flag:cz-1x1",
	});
}

export default Component;
