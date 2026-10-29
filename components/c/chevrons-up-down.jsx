import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loz5rn4-x.css';
import '../../css/m/m9ropn74r.css';
import '../../css/z/zmcrrdb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loz5rn4-x"/><path class="m9ropn74r"/><path class="zmcrrdb9p"/>`,
		"fallback": "withicons-bauhaus:chevrons-up-down",
	});
}

export default Component;
