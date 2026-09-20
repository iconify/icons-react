import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-kcmxnus.css';
import '../../css/p/pm72mougk.css';
import '../../css/l/l7j3nibvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-kcmxnus"/><path class="pm72mougk"/><path class="l7j3nibvv"/>`,
		"fallback": "octicon:fold-24",
	});
}

export default Component;
