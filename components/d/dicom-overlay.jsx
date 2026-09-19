import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0109jbdn.css';
import '../../css/s/scn20qlnz.css';
import '../../css/z/zo89sabib.css';
import '../../css/o/oi9t13ngc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0109jbdn"/><path class="scn20qlnz"/><path class="zo89sabib"/><path class="oi9t13ngc"/>`,
		"fallback": "carbon:dicom-overlay",
	});
}

export default Component;
