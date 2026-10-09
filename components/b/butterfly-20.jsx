import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7tynrbzb.css';
import '../../css/b/bqqcw45gt.css';
import '../../css/c/clko2h42t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7tynrbzb"/><path class="bqqcw45gt"/><path class="clko2h42t"/>`,
		"fallback": "energy-icons:butterfly-20",
	});
}

export default Component;
