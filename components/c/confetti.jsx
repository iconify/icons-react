import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtaspevdd.css';
import '../../css/v/v206u3j4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer rtaspevdd"/><path class="duoicon-primary-layer v206u3j4t"/>`,
		"fallback": "duo-icons:confetti",
	});
}

export default Component;
