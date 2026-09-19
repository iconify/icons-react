import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vuz12tb0u.css';
import '../../css/a/admehqbfz.css';
import '../../css/n/ntmphvbwp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="vuz12tb0u"/><path class="admehqbfz"/><path class="ntmphvbwp"/></g>`,
		"fallback": "icon-park-outline:certificate",
	});
}

export default Component;
