import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m_kb_-b3u.css';
import '../../css/g/g9dmxub3i.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="m_kb_-b3u"/><path class="g9dmxub3i"/></g>`,
		"fallback": "si-glyph:clipboard-checked",
	});
}

export default Component;
