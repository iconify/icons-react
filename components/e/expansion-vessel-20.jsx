import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4aws_orj.css';
import '../../css/l/l-h9c6bos.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4aws_orj"/><path class="l-h9c6bos"/>`,
		"fallback": "energy-icons:expansion-vessel-20",
	});
}

export default Component;
