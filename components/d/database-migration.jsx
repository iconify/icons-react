import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozskazbsp.css';
import '../../css/j/j4z5zmbnn.css';
import '../../css/d/ddvpwkbmt.css';
import '../../css/r/rkqbxubsf.css';
import '../../css/g/g51i94h2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozskazbsp"/><path class="j4z5zmbnn"/><path class="ddvpwkbmt"/><path class="rkqbxubsf"/><path class="g51i94h2q"/>`,
		"fallback": "eos-icons:database-migration",
	});
}

export default Component;
