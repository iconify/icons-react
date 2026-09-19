import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkb50fbaw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkb50fbaw"/>`,
		"fallback": "icon-park:down-one",
	});
}

export default Component;
