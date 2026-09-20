import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfc3txbai.css';
import '../../css/f/f43eqhbwn.css';
import '../../css/y/yx6wxur-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dfc3txbai"/><circle class="f43eqhbwn"/><path clip-rule="evenodd" class="yx6wxur-h"/>`,
		"fallback": "nrk:geopoint",
	});
}

export default Component;
