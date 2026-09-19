import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pvvsmq5js.css';
import '../../css/o/o1k8wcbly.css';
import '../../css/d/d6up25bex.css';
import '../../css/z/ziil8acyu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="pvvsmq5js"/><g class="o1k8wcbly"><path transform="matrix(.09189 0 0 .09115 6.896 6.683)" class="d6up25bex"/><path transform="matrix(.09189 0 0 .09115 6.896 6.683)" class="ziil8acyu"/></g></g>`,
		"fallback": "catppuccin:folder-yarn-open",
	});
}

export default Component;
