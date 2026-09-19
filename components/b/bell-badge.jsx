import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybjym5b1h.css';
import '../../css/b/bjzsqyhqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer ybjym5b1h"/><path class="bjzsqyhqp duoicon-primary-layer"/>`,
		"fallback": "duo-icons:bell-badge",
	});
}

export default Component;
