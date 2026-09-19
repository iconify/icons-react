import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/yz5_qw9yo.css';
import '../../css/r/rdsegwbqz.css';
import '../../css/o/os310xbra.css';
import '../../css/i/i_s1w1epm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="yz5_qw9yo"/><path class="rdsegwbqz"/><path class="os310xbra"/><path class="i_s1w1epm"/></g>`,
		"fallback": "hugeicons:chart-up",
	});
}

export default Component;
