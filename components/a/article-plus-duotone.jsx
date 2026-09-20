import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suohx5bzk.css';
import '../../css/q/qb-wvabvh.css';
import '../../css/t/tdqb12byx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suohx5bzk"/><path class="qb-wvabvh"/><path class="tdqb12byx"/>`,
		"fallback": "stash:article-plus-duotone",
	});
}

export default Component;
