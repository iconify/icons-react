import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dvc87tbis.css';
import '../../css/s/sucfzibxq.css';
import '../../css/u/utfeskb0a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="dvc87tbis"/><path class="sucfzibxq"/><path class="utfeskb0a"/></g>`,
		"fallback": "icon-park:holy-sword",
	});
}

export default Component;
