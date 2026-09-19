import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8uf12bkv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8uf12bkv"/>`,
		"fallback": "ps:contrast",
	});
}

export default Component;
