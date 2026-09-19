import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4qmq9bbm.css';
import '../../css/a/anprkxbfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4qmq9bbm"/><path clip-rule="evenodd" class="anprkxbfg"/>`,
		"fallback": "basil:adobe-photoshop-solid",
	});
}

export default Component;
