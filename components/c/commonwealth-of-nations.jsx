import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7wfo1l2j.css';
import '../../css/h/hpwczr9zj.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7wfo1l2j"/><path class="hpwczr9zj"/>`,
		"fallback": "tabler-flags:commonwealth-of-nations",
	});
}

export default Component;
