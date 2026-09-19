import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgpzimtyu.css';
import '../../css/c/cshvu2rwr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgpzimtyu"/><path class="cshvu2rwr"/>`,
		"fallback": "carbon:chart-bubble",
	});
}

export default Component;
