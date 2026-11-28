import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jn9dndbtq.css';
import '../../css/u/uilojg1vs.css';
import '../../css/b/blaopgfmd.css';
import '../../css/b/bquz3uorp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jn9dndbtq"/><path class="uilojg1vs"/><path class="blaopgfmd"/><path class="bquz3uorp"/></g>`,
		"fallback": "iconaut:chocolate-bar",
	});
}

export default Component;
