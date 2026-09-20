import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/v/vfk7oq95l.css';
import '../../css/f/f42nu2bob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="vfk7oq95l"/><path class="f42nu2bob"/></g>`,
		"fallback": "streamline-cyber:glass-beer-1",
	});
}

export default Component;
