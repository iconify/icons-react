import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g35dlbbje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g35dlbbje"/>`,
		"fallback": "prime:arrows-alt",
	});
}

export default Component;
