import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2_wgcb5j.css';
import '../../css/h/h1kxnnbyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2_wgcb5j duoicon-secondary-layer"/><path class="duoicon-primary-layer h1kxnnbyq"/>`,
		"fallback": "duo-icons:book",
	});
}

export default Component;
