import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9a1-lbya.css';
import '../../css/x/xl9oz1zix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="g9a1-lbya"/><path class="xl9oz1zix"/>`,
		"fallback": "selfhst:dumbdrop",
	});
}

export default Component;
