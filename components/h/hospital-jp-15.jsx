import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhx4xggnw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhx4xggnw"/>`,
		"fallback": "maki:hospital-jp-15",
	});
}

export default Component;
