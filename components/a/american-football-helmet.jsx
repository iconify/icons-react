import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3u_gjbve.css';
import '../../css/o/opypcab7p.css';
import '../../css/n/n-jc1sbdf.css';
import '../../css/b/bf0a11btt.css';
import '../../css/s/s4oo93bfl.css';
import '../../css/u/un92fm4rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o3u_gjbve"/><path class="opypcab7p"/><path class="n-jc1sbdf"/><path class="bf0a11btt"/><path class="s4oo93bfl"/><path class="un92fm4rj"/></g>`,
		"fallback": "streamline-ultimate-color:american-football-helmet",
	});
}

export default Component;
