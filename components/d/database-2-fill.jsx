import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-dgb1bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-dgb1bam"/>`,
		"fallback": "ri:database-2-fill",
	});
}

export default Component;
