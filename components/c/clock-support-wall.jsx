import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plml1nb5a.css';
import '../../css/i/iq2ggzbaw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plml1nb5a"/><path class="iq2ggzbaw"/>`,
		"fallback": "roentgen:clock-support-wall",
	});
}

export default Component;
