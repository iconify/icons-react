import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g62_debmy.css';
import '../../css/g/gx4l6kh5d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g62_debmy"/><path class="gx4l6kh5d"/>`,
		"fallback": "ep:baseball",
	});
}

export default Component;
