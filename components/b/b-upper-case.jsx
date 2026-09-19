import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itk3lzbqa.css';

const viewBox = {"width":455,"height":735};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itk3lzbqa"/>`,
		"fallback": "ls:b-upper-case",
	});
}

export default Component;
