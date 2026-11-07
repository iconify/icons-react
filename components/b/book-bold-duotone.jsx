import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd9cc7byy.css';
import '../../css/q/qqtleebkg.css';
import '../../css/n/n-o51-mex.css';
import '../../css/s/sdgjn765p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd9cc7byy"/><path class="qqtleebkg"/><path class="n-o51-mex"/><path class="sdgjn765p"/>`,
		"fallback": "solar:book-bold-duotone",
	});
}

export default Component;
