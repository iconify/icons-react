import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyzyv9lqb.css';
import '../../css/p/pefcugrti.css';
import '../../css/l/lt1oixs7c.css';
import '../../css/c/c_tiat4ia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyzyv9lqb wm-k"/><path class="pefcugrti wm-a"/><path class="lt1oixs7c wm-a"/><path class="c_tiat4ia wm-a"/>`,
		"fallback": "withicons-bauhaus:calculator",
	});
}

export default Component;
