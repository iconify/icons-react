import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtjdqybjn.css';
import '../../css/n/nhs-d-bja.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtjdqybjn"/><path class="nhs-d-bja"/>`,
		"fallback": "ep:bottom-left",
	});
}

export default Component;
