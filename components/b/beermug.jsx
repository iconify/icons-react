import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md5rxcbgi.css';
import '../../css/r/rh_lsv0bg.css';
import '../../css/q/qhf2oqbcs.css';
import '../../css/m/mmdfc-b9m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md5rxcbgi"/><path class="rh_lsv0bg"/><path class="qhf2oqbcs"/><path class="mmdfc-b9m"/>`,
		"fallback": "fxemoji:beermug",
	});
}

export default Component;
