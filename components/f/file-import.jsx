import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu1-mmbtf.css';
import '../../css/n/n3w3yo25d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu1-mmbtf"/><path class="n3w3yo25d"/>`,
		"fallback": "pixel:file-import",
	});
}

export default Component;
