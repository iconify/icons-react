import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj-1rb3_g.css';
import '../../css/m/mkx0ve-2x.css';
import '../../css/a/ak63wskol.css';
import '../../css/q/q9i7kob_f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj-1rb3_g"/><path class="mkx0ve-2x"/><path class="ak63wskol"/><path class="q9i7kob_f"/>`,
		"fallback": "flat-color-icons:google",
	});
}

export default Component;
