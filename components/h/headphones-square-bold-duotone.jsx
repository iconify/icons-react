import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_712477j.css';
import '../../css/b/bs6xgtf0q.css';
import '../../css/w/w_p0ksbmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r_712477j"/><path class="bs6xgtf0q"/><path class="w_p0ksbmv"/>`,
		"fallback": "solar:headphones-square-bold-duotone",
	});
}

export default Component;
