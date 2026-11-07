import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7qi5pmcg.css';
import '../../css/b/b7scrfump.css';
import '../../css/b/b-tlngp_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7qi5pmcg"/><path class="b7scrfump"/><path class="b-tlngp_c"/>`,
		"fallback": "solar:hand-pills-bold-duotone",
	});
}

export default Component;
