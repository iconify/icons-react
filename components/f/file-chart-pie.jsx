import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9xskgb-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9xskgb-l"/>`,
		"fallback": "vadivam:file-chart-pie",
	});
}

export default Component;
