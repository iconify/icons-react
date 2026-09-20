import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bia8e8idd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bia8e8idd"/>`,
		"fallback": "streamline-block:control-buttons-stop",
	});
}

export default Component;
