import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jxl67pbry.css';
import '../../css/t/t0kpu6b6r.css';
import '../../css/x/xcwnt1qrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="jxl67pbry"/><path class="t0kpu6b6r"/><path class="xcwnt1qrn"/></g>`,
		"fallback": "lucide:atom",
	});
}

export default Component;
