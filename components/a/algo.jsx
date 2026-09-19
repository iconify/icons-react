import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufs0pr4sd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufs0pr4sd"/>`,
		"fallback": "cryptocurrency:algo",
	});
}

export default Component;
