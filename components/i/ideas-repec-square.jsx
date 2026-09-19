import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_nj9wwfg.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_nj9wwfg"/>`,
		"fallback": "academicons:ideas-repec-square",
	});
}

export default Component;
