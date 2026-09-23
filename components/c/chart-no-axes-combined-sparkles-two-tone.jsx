import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x3bv72bvx.css';
import '../../css/t/twtzfeb6g.css';
import '../../css/g/gacmsohwz.css';
import '../../css/v/vs-z1vb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x3bv72bvx"/><path class="twtzfeb6g"/><path class="gacmsohwz"/><path class="vs-z1vb4f"/></g>`,
		"fallback": "keyline-icons:chart-no-axes-combined-sparkles-two-tone",
	});
}

export default Component;
