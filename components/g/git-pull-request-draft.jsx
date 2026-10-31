import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l43khq9vu.css';
import '../../css/b/bkqngzb1q.css';
import '../../css/g/gorsochjg.css';
import '../../css/b/b0q5uxwll.css';
import '../../css/j/jgtis7b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="l43khq9vu"/><path class="bkqngzb1q wm-shine"/><path class="gorsochjg wm-k"/><path class="b0q5uxwll wm-a"/><path class="jgtis7b9v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:git-pull-request-draft",
	});
}

export default Component;
