import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efrdp_bnl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="efrdp_bnl"/>`,
		"fallback": "streamline:ai-upscale-spark-solid",
	});
}

export default Component;
