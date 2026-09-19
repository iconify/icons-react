import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9p1hcckx.css';
import '../../css/t/ttjr82jtr.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged p9p1hcckx"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-2--badged ttjr82jtr"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:email-outline-badged",
	});
}

export default Component;
