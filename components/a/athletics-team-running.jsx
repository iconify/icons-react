import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwpkj-b8l.css';
import '../../css/k/kuydkjbao.css';
import '../../css/a/adwtuvifj.css';
import '../../css/t/tuwfl-zat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iwpkj-b8l"/><path class="kuydkjbao"/><path class="adwtuvifj"/><path class="tuwfl-zat"/></g>`,
		"fallback": "streamline-ultimate-color:athletics-team-running",
	});
}

export default Component;
