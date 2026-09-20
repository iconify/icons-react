import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spezjibom.css';
import '../../css/n/njxgolblu.css';
import '../../css/c/c8x0v5bdb.css';
import '../../css/c/ci4na7b_a.css';
import '../../css/a/a55x7e5ed.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spezjibom"/><path class="njxgolblu"/><path class="c8x0v5bdb"/><path class="ci4na7b_a"/><path class="a55x7e5ed"/>`,
		"fallback": "medical-icon:i-volume-control",
	});
}

export default Component;
