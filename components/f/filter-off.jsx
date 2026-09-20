import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/c/cibe9a.css';
import '../../css/i/irlkmr.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-54.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8x2TRc7W"><path class="c5xdmn cibe9a"/><path class="c5xdmn irlkmr oxx-om"/></mask></defs><path mask="url(#SVG8x2TRc7W)" class="botfzx"/><path class="c5xdmn gd_4-q irlkmr"/>`,
		"fallback": "line-md:filter-off",
	});
}

export default Component;
