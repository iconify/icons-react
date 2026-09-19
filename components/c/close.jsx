import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opd2-3bgk.css';
import '../../css/u/uuunrrbso.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opd2-3bgk"/><path class="uuunrrbso"/>`,
		"fallback": "ei:close",
	});
}

export default Component;
