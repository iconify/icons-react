import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neifvedcl.css';
import '../../css/e/etgavr0mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neifvedcl"/><path class="etgavr0mg"/>`,
		"fallback": "prime:check-circle",
	});
}

export default Component;
