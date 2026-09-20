import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpfg3lbzb.css';
import '../../css/g/g26fkqble.css';
import '../../css/p/px4i0s1qf.css';
import '../../css/l/lk2oa9bac.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpfg3lbzb"/><path class="g26fkqble"/><path class="px4i0s1qf"/><circle class="lk2oa9bac"/>`,
		"fallback": "ooui:image-gallery-rtl",
	});
}

export default Component;
