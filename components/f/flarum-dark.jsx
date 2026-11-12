import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cutyt3biv.css';
import '../../css/x/xvo7kubqk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cutyt3biv"/><path class="xvo7kubqk"/>`,
		"fallback": "selfhst:flarum-dark",
	});
}

export default Component;
