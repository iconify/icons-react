import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ig50veboi.css';
import '../../css/m/mn3m7obys.css';
import '../../css/p/pqoe6vb3f.css';
import '../../css/n/nn9e_l3ma.css';
import '../../css/o/om0gyfb8t.css';
import '../../css/v/vrdj6c8ht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ig50veboi wm-shadow"/><path class="mn3m7obys"/><path class="pqoe6vb3f"/><path class="nn9e_l3ma"/><path class="om0gyfb8t"/><path class="vrdj6c8ht"/></g>`,
		"fallback": "withicons-retro:folder-x",
	});
}

export default Component;
