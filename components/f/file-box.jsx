import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/epagb2e0c.css';
import '../../css/c/cwmq39bts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="epagb2e0c"/><path class="cwmq39bts"/></g>`,
		"fallback": "hugeicons:file-box",
	});
}

export default Component;
