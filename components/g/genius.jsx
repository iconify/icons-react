import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhq8wvmue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhq8wvmue"/>`,
		"fallback": "thesvg-color:genius",
	});
}

export default Component;
