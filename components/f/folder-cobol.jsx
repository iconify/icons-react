import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhg495fle.css';
import '../../css/g/gb0t1hblg.css';
import '../../css/j/jje-lsbfh.css';
import '../../css/u/uslwxsbwk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhg495fle"/><g class="gb0t1hblg"><path class="jje-lsbfh"/><path class="uslwxsbwk"/></g>`,
		"fallback": "material-icon-theme:folder-cobol",
	});
}

export default Component;
