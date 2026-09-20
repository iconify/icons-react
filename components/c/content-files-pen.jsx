import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps9lkiisw.css';
import '../../css/o/oh5vljisv.css';
import '../../css/r/rlcxgmb1c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps9lkiisw"/><path class="oh5vljisv"/><path class="rlcxgmb1c"/>`,
		"fallback": "streamline-pixel:content-files-pen",
	});
}

export default Component;
