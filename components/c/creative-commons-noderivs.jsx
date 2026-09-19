import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en_bw8biv.css';
import '../../css/c/cioxv2q3k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="en_bw8biv"/><path clip-rule="evenodd" class="cioxv2q3k"/>`,
		"fallback": "entypo:creative-commons-noderivs",
	});
}

export default Component;
