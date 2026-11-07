import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/j/jq_ooubgw.css';
import '../../css/u/u2g21000b.css';
import '../../css/t/t219vab9w.css';
import '../../css/o/opm_vbb2d.css';
import '../../css/t/t6dnxslch.css';
import '../../css/t/t1-16f25t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="jq_ooubgw"/><path class="u2g21000b"/></g><path class="t219vab9w"/><path class="opm_vbb2d"/><path class="t6dnxslch"/><path class="t1-16f25t"/>`,
		"fallback": "solar:airbuds-bold-duotone",
	});
}

export default Component;
