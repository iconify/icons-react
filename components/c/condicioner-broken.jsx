import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/ljipgdcmu.css';
import '../../css/b/b24f5vk0n.css';
import '../../css/v/vznjcc47g.css';
import '../../css/n/nngezdbuo.css';
import '../../css/g/g9h45abrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ljipgdcmu"/><path class="b24f5vk0n"/><path class="vznjcc47g"/><path class="nngezdbuo"/><path class="g9h45abrt"/></g>`,
		"fallback": "solar:condicioner-broken",
	});
}

export default Component;
