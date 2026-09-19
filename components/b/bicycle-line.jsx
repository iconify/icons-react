import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyi88vbra.css';
import '../../css/l/lg_kvbbcv.css';
import '../../css/i/i2_v1zb7g.css';
import '../../css/d/dguonpmfm.css';
import '../../css/j/jpti-ymvz.css';
import '../../css/a/alpoknbuk.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 hyi88vbra"/><path class="clr-i-outline clr-i-outline-path-2 lg_kvbbcv"/><path class="clr-i-outline clr-i-outline-path-3 i2_v1zb7g"/><path class="clr-i-outline clr-i-outline-path-4 dguonpmfm"/><path class="clr-i-outline clr-i-outline-path-5 jpti-ymvz"/><path class="alpoknbuk clr-i-outline clr-i-outline-path-6"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:bicycle-line",
	});
}

export default Component;
