import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx50cdblo.css';
import '../../css/q/qlt_8zq6z.css';
import '../../css/g/gqc9d0bgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx50cdblo"/><path class="qlt_8zq6z"/><path class="gqc9d0bgr"/>`,
		"fallback": "lucide-extended:goal-filled",
	});
}

export default Component;
