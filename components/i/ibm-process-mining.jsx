import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6cinp7vj.css';
import '../../css/l/ly_uttqof.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6cinp7vj"/><path class="ly_uttqof"/>`,
		"fallback": "carbon:ibm-process-mining",
	});
}

export default Component;
