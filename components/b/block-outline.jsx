import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suqii-mid.css';
import '../../css/f/f3yq4bbos.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suqii-mid"/><path class="f3yq4bbos"/>`,
		"fallback": "ooui:block-outline",
	});
}

export default Component;
