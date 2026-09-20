import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o58hkebvg.css';
import '../../css/z/z_40f6buh.css';
import '../../css/q/qpsg985fn.css';
import '../../css/r/ri0sq5aqh.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7b5yRbxn"><g class="o58hkebvg"><path class="z_40f6buh"/><path class="qpsg985fn"/><path class="ri0sq5aqh"/></g></mask></defs><path mask="url(#SVG7b5yRbxn)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:direction-alt-2-duotone-line",
	});
}

export default Component;
