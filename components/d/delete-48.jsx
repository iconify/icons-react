import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq8p88zgp.css';
import '../../css/f/fxsw1ibsd.css';
import '../../css/y/ye66r86mk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq8p88zgp"/><path class="fxsw1ibsd"/><path class="ye66r86mk"/>`,
		"fallback": "energy-icons:delete-48",
	});
}

export default Component;
