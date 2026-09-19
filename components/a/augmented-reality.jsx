import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7m4j-afs.css';
import '../../css/g/g4h-wyhlf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7m4j-afs"/><path class="g4h-wyhlf"/>`,
		"fallback": "eos-icons:augmented-reality",
	});
}

export default Component;
