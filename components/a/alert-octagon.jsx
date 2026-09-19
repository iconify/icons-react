import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dstdqz7pa.css';
import '../../css/p/prmb0_bed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dstdqz7pa duoicon-secondary-layer"/><path class="duoicon-primary-layer prmb0_bed"/>`,
		"fallback": "duo-icons:alert-octagon",
	});
}

export default Component;
