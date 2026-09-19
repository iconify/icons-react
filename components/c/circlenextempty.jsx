import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwo3tlmee.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwo3tlmee"/>`,
		"fallback": "whh:circlenextempty",
	});
}

export default Component;
