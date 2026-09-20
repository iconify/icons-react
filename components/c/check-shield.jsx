import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/wa6stj33i.css';
import '../../css/n/nvoavht3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="wa6stj33i"/><path class="nvoavht3l"/></g>`,
		"fallback": "streamline-cyber:check-shield",
	});
}

export default Component;
