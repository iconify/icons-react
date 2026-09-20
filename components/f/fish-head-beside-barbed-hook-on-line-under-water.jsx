import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/seqwugbcq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="seqwugbcq"/>`,
		"fallback": "pinhead:fish-head-beside-barbed-hook-on-line-under-water",
	});
}

export default Component;
