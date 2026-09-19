import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_ps0n1mb.css';
import '../../css/b/buxkfmbco.css';
import '../../css/e/e9h-a0bkj.css';
import '../../css/b/brh3pjxlu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbhkbodZm"><g class="ft5dv1b6b"><path class="o_ps0n1mb"/><path class="buxkfmbco"/><circle class="e9h-a0bkj"/><circle class="brh3pjxlu"/></g></mask></defs><path mask="url(#SVGbhkbodZm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:android",
	});
}

export default Component;
