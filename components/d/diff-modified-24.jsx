import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-yovpx2o.css';
import '../../css/y/ywduolbuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-yovpx2o"/><path class="ywduolbuh"/>`,
		"fallback": "octicon:diff-modified-24",
	});
}

export default Component;
