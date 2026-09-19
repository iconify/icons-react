import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlzlh4b_f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlzlh4b_f"/>`,
		"fallback": "entypo:graduation-cap",
	});
}

export default Component;
