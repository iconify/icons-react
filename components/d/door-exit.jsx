import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/h2ji8u6xo.css';
import '../../css/h/h622xdb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="h2ji8u6xo"/><path class="h622xdb4u"/></g>`,
		"fallback": "streamline-cyber:door-exit",
	});
}

export default Component;
