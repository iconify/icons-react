import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s8uv_0b7a.css';
import '../../css/u/uh0kbz4ky.css';
import '../../css/a/a2orprfmi.css';
import '../../css/v/v2utc57qj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s8uv_0b7a"/><path class="uh0kbz4ky"/><circle class="a2orprfmi"/><circle class="v2utc57qj"/></g>`,
		"fallback": "icon-park-outline:android",
	});
}

export default Component;
