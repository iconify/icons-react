import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fr1fxrgrl.css';
import '../../css/h/h6pp3dbux.css';
import '../../css/b/b40oykbsb.css';
import '../../css/o/o38pash6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fr1fxrgrl wm-shadow"/><path class="h6pp3dbux"/><path class="b40oykbsb"/><path class="o38pash6d"/></g>`,
		"fallback": "withicons-retro:git-compare",
	});
}

export default Component;
