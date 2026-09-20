import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kouw_---f.css';
import '../../css/k/k749kiqke.css';
import '../../css/z/zyodd0blz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kouw_---f"/><path class="k749kiqke"/><path class="zyodd0blz"/></g>`,
		"fallback": "lucide:codepen",
	});
}

export default Component;
