import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paj-fcc1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="paj-fcc1m"/>`,
		"fallback": "streamline-sharp:graph-arrow-user-increase-solid",
	});
}

export default Component;
