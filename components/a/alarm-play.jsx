import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh90i4ezv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lh90i4ezv"/>`,
		"fallback": "reicon:alarm-play",
	});
}

export default Component;
