import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0gas8_s.css';
import '../../css/n/nkd2b7pcb.css';
import '../../css/i/i2k9wdb1i.css';
import '../../css/m/my6364gtl.css';
import '../../css/n/nom1l2ksv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to0gas8_s"/><path class="nkd2b7pcb"/><path class="i2k9wdb1i"/><path class="my6364gtl"/><path class="nom1l2ksv"/>`,
		"fallback": "openmoji:hourglass-done",
	});
}

export default Component;
