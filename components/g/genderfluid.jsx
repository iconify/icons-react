import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nde522b_j.css';
import '../../css/n/njbbtv2nf.css';
import '../../css/x/xsmx0tbhg.css';
import '../../css/t/tawslrbme.css';
import '../../css/g/gvabyobue.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nde522b_j"/><path class="njbbtv2nf"/><path class="xsmx0tbhg"/><path class="tawslrbme"/><path class="gvabyobue"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:genderfluid",
	});
}

export default Component;
