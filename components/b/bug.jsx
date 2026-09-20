import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp08p-bxz.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp08p-bxz"/>`,
		"fallback": "memory:bug",
	});
}

export default Component;
