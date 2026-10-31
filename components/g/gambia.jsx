import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt4xytbyt.css';
import '../../css/r/r0k-ltjjw.css';
import '../../css/d/dz--kkbng.css';
import '../../css/k/k40zmxb3r.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt4xytbyt"/><path class="r0k-ltjjw"/><path class="dz--kkbng"/><path class="k40zmxb3r"/>`,
		"fallback": "tabler-flags:gambia",
	});
}

export default Component;
