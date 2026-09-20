import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3cf4bbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s3cf4bbin"/>`,
		"fallback": "streamline-sharp:curves-levels-graph-solid",
	});
}

export default Component;
