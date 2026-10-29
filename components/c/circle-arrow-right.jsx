import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q97ltfs3e.css';
import '../../css/f/ffgegibjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q97ltfs3e wm-k"/><path class="ffgegibjj wm-a"/>`,
		"fallback": "withicons-bauhaus:circle-arrow-right",
	});
}

export default Component;
