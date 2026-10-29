import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j579kzbfd.css';
import '../../css/z/z_db1muvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j579kzbfd wm-a"/><path class="z_db1muvc"/></g>`,
		"fallback": "withicons:arrow-left-to-line-duo",
	});
}

export default Component;
