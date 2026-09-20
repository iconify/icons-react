import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu11w07_v.css';
import '../../css/f/f0yad6-af.css';
import '../../css/c/cq_2o7u8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vu11w07_v"/><path class="f0yad6-af"/><path clip-rule="evenodd" class="cq_2o7u8v"/>`,
		"fallback": "solar:bone-broken-outline",
	});
}

export default Component;
