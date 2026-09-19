import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/i/iuyi4l1sh.css';
import '../../css/t/tzwfbjhup.css';
import '../../css/u/uvj71_bha.css';
import '../../css/m/myoistbvt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGf853Ddqu"><g class="wwvp95byt"><path clip-rule="evenodd" class="iuyi4l1sh"/><path class="tzwfbjhup"/><path class="uvj71_bha"/><path class="myoistbvt"/></g></mask></defs><path mask="url(#SVGf853Ddqu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:cuvette",
	});
}

export default Component;
