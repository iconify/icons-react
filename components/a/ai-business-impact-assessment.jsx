import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf_ub3bqf.css';
import '../../css/r/riavwwb-b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf_ub3bqf"/><path class="riavwwb-b"/>`,
		"fallback": "carbon:ai-business-impact-assessment",
	});
}

export default Component;
