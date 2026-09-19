import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/h/hrq90hfel.css';
import '../../css/v/vnw7s2b5o.css';
import '../../css/m/mm_zeetyu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><circle class="hrq90hfel"/><path class="vnw7s2b5o"/><path class="mm_zeetyu"/></g>`,
		"fallback": "icon-park:add-text-two",
	});
}

export default Component;
