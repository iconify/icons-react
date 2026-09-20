import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dtq3ihx1g.css';
import '../../css/z/zzr1xccry.css';
import '../../css/m/mat63ubej.css';
import '../../css/k/kem226bqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dtq3ihx1g"/><path class="zzr1xccry"/><path class="mat63ubej"/><path class="kem226bqf"/></g>`,
		"fallback": "streamline-freehand-color:cellular-network-wifi-4g",
	});
}

export default Component;
