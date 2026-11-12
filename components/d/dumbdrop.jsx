import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbuj3kxuy.css';
import '../../css/x/xl9oz1zix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="mbuj3kxuy"/><path class="xl9oz1zix"/>`,
		"fallback": "selfhst:dumbdrop",
	});
}

export default Component;
