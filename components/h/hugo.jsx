import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1a9etbxw.css';
import '../../css/s/scsqglbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1a9etbxw"/><path class="scsqglbni"/>`,
		"fallback": "bxl:hugo",
	});
}

export default Component;
