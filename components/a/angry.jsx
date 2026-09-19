import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iaj7ns9kj.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iaj7ns9kj"/>`,
		"fallback": "fa-regular:angry",
	});
}

export default Component;
