import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n9q04zb5i.css';
import '../../css/l/lj_7yb7ea.css';
import '../../css/w/w01p5vboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n9q04zb5i"/><path class="lj_7yb7ea"/><path class="w01p5vboc"/></g>`,
		"fallback": "streamline-ultimate:delivery-truck-clock",
	});
}

export default Component;
