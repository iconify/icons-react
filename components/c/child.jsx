import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih-dr08ex.css';
import '../../css/n/ngqdbfb-g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih-dr08ex"/><path class="ngqdbfb-g"/>`,
		"fallback": "vaadin:child",
	});
}

export default Component;
