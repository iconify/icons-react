import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmep3xodh.css';
import '../../css/o/oc7cps_zz.css';
import '../../css/y/y7zdj2uxz.css';
import '../../css/l/lerunzb0y.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmep3xodh"/><path class="oc7cps_zz"/><path class="y7zdj2uxz"/><path class="lerunzb0y"/>`,
		"fallback": "material-icon-theme:gcp",
	});
}

export default Component;
