import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0zmwl6su.css';
import '../../css/d/d_zjijokg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x0zmwl6su"/><path class="d_zjijokg"/>`,
		"fallback": "lineicons:file-xmark",
	});
}

export default Component;
