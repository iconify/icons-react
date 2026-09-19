import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fanuthb_e.css';
import '../../css/u/um86nibse.css';
import '../../css/l/lco92fbia.css';
import '../../css/t/tw1l7nbgm.css';
import '../../css/o/oubjqlb4f.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="fanuthb_e"/><circle class="um86nibse"/><circle class="lco92fbia"/><path class="tw1l7nbgm"/><circle class="oubjqlb4f"/>`,
		"fallback": "foundation:foot",
	});
}

export default Component;
