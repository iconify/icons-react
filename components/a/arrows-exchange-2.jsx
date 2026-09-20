import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfp4l5uux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfp4l5uux"/>`,
		"fallback": "tabler:arrows-exchange-2",
	});
}

export default Component;
