import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tterhvcih.css';
import '../../css/g/gi416ibwv.css';
import '../../css/j/jzjrs5bvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer tterhvcih"/><path class="duoicon-primary-layer gi416ibwv"/><path class="duoicon-primary-layer jzjrs5bvs"/>`,
		"fallback": "duo-icons:id-card",
	});
}

export default Component;
