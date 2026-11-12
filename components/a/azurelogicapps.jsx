import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofz-09bxi.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofz-09bxi"/>`,
		"fallback": "devicon-plain:azurelogicapps",
	});
}

export default Component;
