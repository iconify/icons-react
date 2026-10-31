import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/icoao1bvz.css';
import '../../css/i/iu7isjbib.css';
import '../../css/t/tzendbcli.css';
import '../../css/x/x41ud06-n.css';
import '../../css/w/wl2lznbgi.css';
import '../../css/b/b22ic2tca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="icoao1bvz wm-shadow"/><path class="iu7isjbib"/><path class="tzendbcli"/><path class="x41ud06-n"/><path class="wl2lznbgi"/><path class="b22ic2tca"/></g>`,
		"fallback": "withicons-retro:building-2",
	});
}

export default Component;
