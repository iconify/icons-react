import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpqhj5bej.css';
import '../../css/x/xe9aj_lzj.css';
import '../../css/p/p_ziwabsz.css';
import '../../css/a/axq3e3bkb.css';
import '../../css/n/nizlai9po.css';
import '../../css/b/bsbdzxd2i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpqhj5bej"/><path class="xe9aj_lzj"/><path class="p_ziwabsz"/><path class="axq3e3bkb"/><path class="nizlai9po"/><path class="bsbdzxd2i"/>`,
		"fallback": "devicon:elm",
	});
}

export default Component;
