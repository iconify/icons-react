import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbmoypoyr.css';
import '../../css/o/osid_1eik.css';
import '../../css/s/s9kt2ry7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbmoypoyr"/><path class="osid_1eik"/><path class="s9kt2ry7w"/>`,
		"fallback": "energy-icons:ballot-box-48",
	});
}

export default Component;
