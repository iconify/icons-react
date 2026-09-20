import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6q0lrtoa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6q0lrtoa"/>`,
		"fallback": "streamline-flex:film-slate",
	});
}

export default Component;
