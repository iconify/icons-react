import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xdayi_bsv.css';
import '../../css/w/wvxk7s10x.css';
import '../../css/o/o2kynzbon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xdayi_bsv"/><path class="wvxk7s10x"/><path class="o2kynzbon"/></g>`,
		"fallback": "solar:augmented-reality-outline",
	});
}

export default Component;
