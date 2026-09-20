import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4tok7p5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4tok7p5j"/>`,
		"fallback": "keyline-icons:git-pull-request-create-sharp",
	});
}

export default Component;
