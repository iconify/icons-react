import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7a28wb_h.css';
import '../../css/c/ch0xn7tua.css';
import '../../css/d/d2gksqian.css';
import '../../css/m/mu410db3i.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7a28wb_h"/><path class="ch0xn7tua"/><path class="d2gksqian"/><path class="mu410db3i"/>`,
		"fallback": "clarity:control-lun-line",
	});
}

export default Component;
