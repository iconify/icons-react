import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7qi5pmcg.css';
import '../../css/e/ex62vvb2p.css';
import '../../css/s/smy-kq_2o.css';
import '../../css/z/z973ydbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7qi5pmcg"/><path class="ex62vvb2p"/><path class="smy-kq_2o"/><path class="z973ydbeg"/>`,
		"fallback": "solar:hand-stars-bold-duotone",
	});
}

export default Component;
