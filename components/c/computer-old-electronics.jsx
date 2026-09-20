import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7keyur9y.css';
import '../../css/p/pwjb53wlt.css';
import '../../css/c/c2kgr46-c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7keyur9y"/><path class="pwjb53wlt"/><path class="c2kgr46-c"/>`,
		"fallback": "streamline-pixel:computer-old-electronics",
	});
}

export default Component;
