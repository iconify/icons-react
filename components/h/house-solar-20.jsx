import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6-rcbv6t.css';
import '../../css/z/z8qts6bhu.css';
import '../../css/p/pgb6kxbaw.css';
import '../../css/a/am_oegbzf.css';
import '../../css/g/g776s3b5m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6-rcbv6t"/><path class="z8qts6bhu"/><path class="pgb6kxbaw"/><path class="am_oegbzf"/><path class="g776s3b5m"/>`,
		"fallback": "energy-icons:house-solar-20",
	});
}

export default Component;
