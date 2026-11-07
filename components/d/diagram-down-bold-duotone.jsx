import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd1ch4bgm.css';
import '../../css/l/l_tzrhbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd1ch4bgm"/><path class="l_tzrhbkr"/>`,
		"fallback": "solar:diagram-down-bold-duotone",
	});
}

export default Component;
