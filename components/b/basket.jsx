import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pydz04b8f.css';
import '../../css/o/ockmixada.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pydz04b8f"/><path class="ockmixada"/>`,
		"fallback": "boxicons:basket",
	});
}

export default Component;
