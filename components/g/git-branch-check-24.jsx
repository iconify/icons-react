import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iia8adc_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iia8adc_c"/>`,
		"fallback": "octicon:git-branch-check-24",
	});
}

export default Component;
