import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv7f0p25w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kv7f0p25w"/>`,
		"fallback": "nrk:ellipsis-vertical-circle-solid",
	});
}

export default Component;
