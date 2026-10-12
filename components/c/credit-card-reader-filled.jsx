import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9phybbnp.css';
import '../../css/u/ukwcimbqx.css';
import '../../css/h/h0ooxsbpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9phybbnp"/><path clip-rule="evenodd" class="ukwcimbqx"/><path class="h0ooxsbpf"/>`,
		"fallback": "lucide-extended:credit-card-reader-filled",
	});
}

export default Component;
