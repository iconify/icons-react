import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nke5fhnsv.css';
import '../../css/h/hcg_4bble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nke5fhnsv"/><path class="hcg_4bble"/>`,
		"fallback": "streamline-freehand:earpods-charge",
	});
}

export default Component;
