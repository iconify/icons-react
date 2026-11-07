import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d27t_bb-z.css';
import '../../css/t/tucskcrzp.css';
import '../../css/b/b6_4kwocn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d27t_bb-z"/><path class="tucskcrzp"/><path clip-rule="evenodd" class="b6_4kwocn"/>`,
		"fallback": "solar:dropper-outline",
	});
}

export default Component;
