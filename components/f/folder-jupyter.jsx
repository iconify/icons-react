import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbnjf8b6m.css';
import '../../css/d/dvf_gvr6i.css';
import '../../css/j/jhv07ebcm.css';
import '../../css/w/w9umcjl6q.css';
import '../../css/a/a-u3jqbpi.css';
import '../../css/s/sjgwxabga.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbnjf8b6m"/><g transform="matrix(.7 0 0 .7 5 5)" class="dvf_gvr6i"><path class="jhv07ebcm"/><circle class="w9umcjl6q"/><circle class="a-u3jqbpi"/><circle class="sjgwxabga"/></g>`,
		"fallback": "material-icon-theme:folder-jupyter",
	});
}

export default Component;
