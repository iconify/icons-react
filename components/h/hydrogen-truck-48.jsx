import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xujk5fdpi.css';
import '../../css/x/x1dswctxk.css';
import '../../css/z/zjk_4wbaj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xujk5fdpi"/><path class="x1dswctxk"/><path class="zjk_4wbaj"/>`,
		"fallback": "energy-icons:hydrogen-truck-48",
	});
}

export default Component;
