import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op7ctac_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op7ctac_a"/>`,
		"fallback": "noviair:file-play",
	});
}

export default Component;
