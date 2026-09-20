import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r095fdb0a.css';
import '../../css/s/sgkeqm1ah.css';
import '../../css/r/ruj0ehbjh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r095fdb0a"/><path class="sgkeqm1ah"/><path class="ruj0ehbjh"/>`,
		"fallback": "vaadin:copy",
	});
}

export default Component;
