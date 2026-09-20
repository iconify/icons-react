import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgj-ambzw.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgj-ambzw"/>`,
		"fallback": "memory:box-light-dashed-vertical-horizontal",
	});
}

export default Component;
