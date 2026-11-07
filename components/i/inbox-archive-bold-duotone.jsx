import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg928d-qd.css';
import '../../css/v/vj271db3h.css';
import '../../css/b/b1eoogomv.css';
import '../../css/u/um80ms1wu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg928d-qd"/><path class="vj271db3h"/><path class="b1eoogomv"/><path class="um80ms1wu"/>`,
		"fallback": "solar:inbox-archive-bold-duotone",
	});
}

export default Component;
