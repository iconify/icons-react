import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3hxb00gr.css';
import '../../css/c/c2uptobfq.css';
import '../../css/n/nlryl0bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3hxb00gr"/><rect class="c2uptobfq"/><rect class="nlryl0bqi"/>`,
		"fallback": "boxicons:horizontal-distribute-right-filled",
	});
}

export default Component;
