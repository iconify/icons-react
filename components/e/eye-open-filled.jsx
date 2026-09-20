import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s3jfwyb4c.css';
import '../../css/s/sg-v389bt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s3jfwyb4c"/><circle class="sg-v389bt"/></g>`,
		"fallback": "reicon:eye-open-filled",
	});
}

export default Component;
