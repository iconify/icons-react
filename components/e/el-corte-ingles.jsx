import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgihau-wd.css';
import '../../css/s/s5od5637z.css';
import '../../css/o/olmyeubsp.css';

const viewBox = {"width":1039.699,"height":585.831};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgihau-wd"/><path class="s5od5637z"/><path class="olmyeubsp"/>`,
		"fallback": "thesvg-color:el-corte-ingles",
	});
}

export default Component;
