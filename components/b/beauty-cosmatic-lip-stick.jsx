import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_pn7accy.css';
import '../../css/c/czydtacky.css';
import '../../css/p/psskj8yuf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_pn7accy"/><path class="czydtacky"/><path class="psskj8yuf"/>`,
		"fallback": "streamline-pixel:beauty-cosmatic-lip-stick",
	});
}

export default Component;
