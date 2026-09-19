import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy1re-qcg.css';
import '../../css/l/lodosdbdi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="qy1re-qcg"/><circle class="lodosdbdi"/>`,
		"fallback": "garden:decimal-stroke-16",
	});
}

export default Component;
