import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc8-4tb2b.css';
import '../../css/s/s6f_wmmxy.css';
import '../../css/y/ypremix2b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc8-4tb2b"/><path class="s6f_wmmxy"/><path class="ypremix2b"/>`,
		"fallback": "ant-design:down-square-twotone",
	});
}

export default Component;
