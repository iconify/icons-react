import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/m/m-pviab0g.css';
import '../../css/g/g2o69q94f.css';
import '../../css/y/ylmo4wmnt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="m-pviab0g"/><path class="g2o69q94f"/><path class="ylmo4wmnt"/></g>`,
		"fallback": "icon-park:bachelor-cap-two",
	});
}

export default Component;
