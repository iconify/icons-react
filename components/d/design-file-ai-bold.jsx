import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjplskbvx.css';
import '../../css/s/s-s3ptbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjplskbvx"/><path class="s-s3ptbcj"/>`,
		"fallback": "streamline-ultimate:design-file-ai-bold",
	});
}

export default Component;
