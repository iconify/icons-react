import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aha9_lkxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aha9_lkxt"/>`,
		"fallback": "streamline-sharp:ai-science-spark-solid",
	});
}

export default Component;
