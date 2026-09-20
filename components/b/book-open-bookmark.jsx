import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jy14xpbli.css';
import '../../css/o/o-csnivgk.css';
import '../../css/i/itbh3jwmp.css';
import '../../css/c/cwbq75bkc.css';
import '../../css/e/e3h0hbbyh.css';
import '../../css/d/d6zrqnn1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jy14xpbli"/><path class="o-csnivgk"/><path class="itbh3jwmp"/><path class="cwbq75bkc"/><path class="e3h0hbbyh"/><path class="d6zrqnn1x"/></g>`,
		"fallback": "streamline-ultimate-color:book-open-bookmark",
	});
}

export default Component;
