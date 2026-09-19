import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1fx9w8jl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1fx9w8jl"/>`,
		"fallback": "cbi:influxdata",
	});
}

export default Component;
