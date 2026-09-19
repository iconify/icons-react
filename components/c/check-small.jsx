import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmrs85b9m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmrs85b9m"/>`,
		"fallback": "icon-park-outline:check-small",
	});
}

export default Component;
