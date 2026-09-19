import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgfnrcc8l.css';
import '../../css/u/uce-6cv7i.css';
import '../../css/x/xjsfynbtp.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgfnrcc8l"/><path class="uce-6cv7i"/><path transform="scale(.86021 .96774)" class="xjsfynbtp"/>`,
		"fallback": "flag:aq-4x3",
	});
}

export default Component;
