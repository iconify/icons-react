import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/e/edu1rvbnu.css';
import '../../css/k/kuv853bdv.css';
import '../../css/s/s2vennbad.css';
import '../../css/i/igij5ib_p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="edu1rvbnu"/><path class="kuv853bdv"/><path class="s2vennbad"/><path class="igij5ib_p"/></g>`,
		"fallback": "icon-park:add-text",
	});
}

export default Component;
