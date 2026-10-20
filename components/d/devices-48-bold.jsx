import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxv9cpb_s.css';
import '../../css/l/lsq14_blx.css';
import '../../css/m/m603dbbqf.css';
import '../../css/l/lt1ufjbwq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxv9cpb_s"/><path class="lsq14_blx"/><path class="m603dbbqf"/><path class="lt1ufjbwq"/>`,
		"fallback": "energy-icons:devices-48-bold",
	});
}

export default Component;
