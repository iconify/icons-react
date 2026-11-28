import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbp5w2bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbp5w2bam"/>`,
		"fallback": "noviair:beaker",
	});
}

export default Component;
