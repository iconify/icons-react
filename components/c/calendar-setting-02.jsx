import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l6b-pdb0n.css';
import '../../css/b/bp760voui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l6b-pdb0n"/><path class="bp760voui"/></g>`,
		"fallback": "hugeicons:calendar-setting-02",
	});
}

export default Component;
