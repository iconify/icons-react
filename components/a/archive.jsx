import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2aa4fbfg.css';
import '../../css/r/r-selsbww.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2aa4fbfg"/><path class="r-selsbww"/>`,
		"fallback": "carbon:archive",
	});
}

export default Component;
