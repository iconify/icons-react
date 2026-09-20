import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/v/vflph64cl.css';
import '../../css/x/x-37y-4zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="vflph64cl"/><path class="x-37y-4zn"/></g>`,
		"fallback": "streamline-cyber:day-cloud-1",
	});
}

export default Component;
