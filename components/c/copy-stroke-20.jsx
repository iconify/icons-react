import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx0i85btj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx0i85btj"/>`,
		"fallback": "garden:copy-stroke-20",
	});
}

export default Component;
