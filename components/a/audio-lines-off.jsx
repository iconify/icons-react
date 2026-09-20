import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjslyj_rv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjslyj_rv"/>`,
		"fallback": "lucide:audio-lines-off",
	});
}

export default Component;
