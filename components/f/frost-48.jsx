import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhtqqrbcl.css';
import '../../css/g/gdgkf1jwj.css';
import '../../css/w/wu47-njnc.css';
import '../../css/w/w025bmewr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhtqqrbcl"/><path class="gdgkf1jwj"/><path class="wu47-njnc"/><path class="w025bmewr"/>`,
		"fallback": "energy-icons:frost-48",
	});
}

export default Component;
