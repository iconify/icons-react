import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb4ssgb7r.css';
import '../../css/e/eopyr_bvr.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb4ssgb7r"/><circle class="eopyr_bvr"/>`,
		"fallback": "foundation:eye",
	});
}

export default Component;
