import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgzn1hbsd.css';
import '../../css/z/z8y_nwpda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgzn1hbsd"/><path class="z8y_nwpda"/>`,
		"fallback": "eos-icons:cloud-controller-manager",
	});
}

export default Component;
