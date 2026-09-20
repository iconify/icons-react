import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3i6itnrb.css';
import '../../css/t/tbzk6sbad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n3i6itnrb"/><path class="tbzk6sbad"/></g>`,
		"fallback": "streamline-ultimate-color:gender-female",
	});
}

export default Component;
