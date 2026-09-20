import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j16ryqnyy.css';
import '../../css/r/rw_gh_boq.css';
import '../../css/l/lrq9z-bjp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j16ryqnyy"/><path class="rw_gh_boq"/><path class="lrq9z-bjp"/>`,
		"fallback": "streamline-block:entertainment-sports",
	});
}

export default Component;
