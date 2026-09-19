import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze5jguwzp.css';
import '../../css/s/s7t5djz9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer ze5jguwzp"/><path class="duoicon-primary-layer s7t5djz9q"/>`,
		"fallback": "duo-icons:approved",
	});
}

export default Component;
