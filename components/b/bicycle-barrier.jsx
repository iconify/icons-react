import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm_kdvb4g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm_kdvb4g"/>`,
		"fallback": "pinhead:bicycle-barrier",
	});
}

export default Component;
