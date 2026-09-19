import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hba0q7bsv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hba0q7bsv"/>`,
		"fallback": "cib:apple-music",
	});
}

export default Component;
