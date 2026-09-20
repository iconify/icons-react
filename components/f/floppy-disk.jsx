import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mavre2s5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mavre2s5p"/>`,
		"fallback": "meteor-icons:floppy-disk",
	});
}

export default Component;
