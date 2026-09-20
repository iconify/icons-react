import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/panl95b6g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="panl95b6g"/>`,
		"fallback": "streamline:ai-email-generator-spark-solid",
	});
}

export default Component;
