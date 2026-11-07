import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnb90nbxf.css';
import '../../css/q/qhrokpb5f.css';
import '../../css/k/kr6tfbc9g.css';
import '../../css/h/ht1vpi3ki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnb90nbxf"/><path class="qhrokpb5f"/><path class="kr6tfbc9g"/><path class="ht1vpi3ki"/>`,
		"fallback": "solar:bowling-bold-duotone",
	});
}

export default Component;
