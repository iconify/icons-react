import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm59sjb2h.css';
import '../../css/s/sn9k1h9dt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm59sjb2h"/><path class="sn9k1h9dt"/>`,
		"fallback": "pixel:chart-line",
	});
}

export default Component;
