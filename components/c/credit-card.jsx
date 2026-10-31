import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qlx8bac7z.css';
import '../../css/j/jk0js4bbm.css';
import '../../css/d/dabqoibcg.css';
import '../../css/b/be2d89b9t.css';
import '../../css/l/l_fnfsnym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qlx8bac7z wm-shadow"/><path class="jk0js4bbm wm-shadow"/><path class="dabqoibcg"/><path class="be2d89b9t"/><path class="l_fnfsnym"/></g>`,
		"fallback": "withicons-brutal:credit-card",
	});
}

export default Component;
