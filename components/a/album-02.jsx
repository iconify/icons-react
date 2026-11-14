import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z0-2mfieg.css';
import '../../css/y/yz_jegb5q.css';
import '../../css/s/sn7cxmbyk.css';
import '../../css/v/v0trjrv3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z0-2mfieg"/><path class="yz_jegb5q"/><path class="sn7cxmbyk"/><path class="v0trjrv3o"/></g>`,
		"fallback": "hugeicons:album-02",
	});
}

export default Component;
