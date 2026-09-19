import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot2aw6chb.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot2aw6chb"/>`,
		"fallback": "fa6-solid:bridge-circle-xmark",
	});
}

export default Component;
