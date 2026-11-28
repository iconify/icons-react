import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqrpx5agk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqrpx5agk"/>`,
		"fallback": "iconaut:arrow-u-turn-right-solid",
	});
}

export default Component;
