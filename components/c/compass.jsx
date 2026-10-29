import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl5uzhbhz.css';
import '../../css/u/u-g8-l4ka.css';
import '../../css/k/kiy3eeynj.css';
import '../../css/n/n96ut4oqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl5uzhbhz wm-k"/><path class="u-g8-l4ka wm-a"/><path class="kiy3eeynj wm-a"/><path class="n96ut4oqc wm-a"/>`,
		"fallback": "withicons-bauhaus:compass",
	});
}

export default Component;
