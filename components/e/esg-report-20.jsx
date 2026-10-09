import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezhonm73e.css';
import '../../css/v/vck8c0qcs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezhonm73e"/><path class="vck8c0qcs"/>`,
		"fallback": "energy-icons:esg-report-20",
	});
}

export default Component;
