import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln-p1pbos.css';
import '../../css/p/p8jcaxb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln-p1pbos"/><path class="p8jcaxb6g"/>`,
		"fallback": "solar:chair-bold-duotone",
	});
}

export default Component;
