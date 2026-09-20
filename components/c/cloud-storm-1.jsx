import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/c/cwmj1erwb.css';
import '../../css/y/yjhzaff8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="cwmj1erwb"/><path class="yjhzaff8q"/></g>`,
		"fallback": "streamline-cyber:cloud-storm-1",
	});
}

export default Component;
