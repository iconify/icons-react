import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwqk5_x8u.css';
import '../../css/k/kmpgrepgc.css';
import '../../css/m/mhu9q7s7p.css';
import '../../css/r/rgdy2_pio.css';
import '../../css/r/rb8emcc-u.css';
import '../../css/v/v7_5v7b0e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwqk5_x8u"/><path class="kmpgrepgc"/><path class="mhu9q7s7p"/><path class="rgdy2_pio"/><path class="rb8emcc-u"/><path class="v7_5v7b0e"/>`,
		"fallback": "energy-icons:heatmap-20",
	});
}

export default Component;
