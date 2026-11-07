import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8epyabtk.css';
import '../../css/v/v696jcbid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8epyabtk"/><path clip-rule="evenodd" class="v696jcbid"/>`,
		"fallback": "solar:clipboard-bold",
	});
}

export default Component;
