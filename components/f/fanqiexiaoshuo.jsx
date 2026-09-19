import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql_ckoerv.css';
import '../../css/p/p6q8xum6y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql_ckoerv"/><path class="p6q8xum6y"/>`,
		"fallback": "icon-park-outline:fanqiexiaoshuo",
	});
}

export default Component;
