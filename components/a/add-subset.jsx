import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8oh7p4lr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8oh7p4lr"/>`,
		"fallback": "icon-park-outline:add-subset",
	});
}

export default Component;
