import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gzebc02qz.css';
import '../../css/m/mqmhdxbks.css';
import '../../css/o/o28d6jajk.css';
import '../../css/e/evln3mbbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gzebc02qz"/><path class="mqmhdxbks"/><path class="o28d6jajk"/><path class="evln3mbbu"/></g>`,
		"fallback": "streamline-ultimate-color:connector-1",
	});
}

export default Component;
