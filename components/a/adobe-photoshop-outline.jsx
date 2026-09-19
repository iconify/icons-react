import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw1yyfbkx.css';
import '../../css/c/czjy8k8hn.css';
import '../../css/d/daxtkab1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sw1yyfbkx"/><path class="czjy8k8hn"/><path clip-rule="evenodd" class="daxtkab1a"/>`,
		"fallback": "basil:adobe-photoshop-outline",
	});
}

export default Component;
