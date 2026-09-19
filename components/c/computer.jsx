import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/d/di1zu1bph.css';
import '../../css/f/fvc61obyz.css';
import '../../css/b/b0fz9dbol.css';
import '../../css/l/lg5ifb00l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="di1zu1bph"/><rect class="fvc61obyz"/><path class="b0fz9dbol"/><path class="lg5ifb00l"/></g>`,
		"fallback": "icon-park:computer",
	});
}

export default Component;
