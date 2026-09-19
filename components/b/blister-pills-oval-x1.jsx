import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqf4v9bys.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lqf4v9bys"/>`,
		"fallback": "healthicons:blister-pills-oval-x1",
	});
}

export default Component;
