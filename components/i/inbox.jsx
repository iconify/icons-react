import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlyez0tgf.css';
import '../../css/d/doz4ehbjz.css';
import '../../css/w/wa_6v2bmy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlyez0tgf"/><path class="doz4ehbjz"/><path class="wa_6v2bmy"/>`,
		"fallback": "openmoji:inbox",
	});
}

export default Component;
