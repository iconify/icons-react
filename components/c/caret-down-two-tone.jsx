import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l4nb2fkfj.css';
import '../../css/o/okv4jubwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l4nb2fkfj"/><path class="okv4jubwj"/></g>`,
		"fallback": "keyline-icons:caret-down-two-tone",
	});
}

export default Component;
