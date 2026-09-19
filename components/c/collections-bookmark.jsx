import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g1pix1bws.css';
import '../../css/r/rugjrsblu.css';
import '../../css/z/z6kf3ab0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g1pix1bws"/><path class="rugjrsblu"/><path class="z6kf3ab0j"/></g>`,
		"fallback": "hugeicons:collections-bookmark",
	});
}

export default Component;
