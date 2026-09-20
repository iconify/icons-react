import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsrkrvcpu.css';
import '../../css/u/uv8ih1bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsrkrvcpu"/><path class="uv8ih1bxk"/>`,
		"fallback": "streamline-ultimate:graph-stats-circle-bold",
	});
}

export default Component;
