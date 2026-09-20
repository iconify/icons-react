import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-52l8b9e.css';
import '../../css/u/u0xljyb_p.css';
import '../../css/v/v07fepgba.css';
import '../../css/c/czwb8zbnq.css';
import '../../css/l/lvbp78bee.css';
import '../../css/t/tlg6vrbmm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="w-52l8b9e"/><path class="u0xljyb_p"/><path class="v07fepgba"/><path class="czwb8zbnq"/><path class="lvbp78bee"/><circle class="tlg6vrbmm"/>`,
		"fallback": "selfhst:capacitarr",
	});
}

export default Component;
