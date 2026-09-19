import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvejj8wur.css';
import '../../css/k/kr2jicboj.css';
import '../../css/g/gtn46m-jg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="xvejj8wur"/><rect class="kr2jicboj"/><rect class="gtn46m-jg"/>`,
		"fallback": "boxicons:grid-row-top-filled",
	});
}

export default Component;
