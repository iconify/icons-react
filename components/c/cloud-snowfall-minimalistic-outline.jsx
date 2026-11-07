import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqmhc7b0x.css';
import '../../css/s/s_jemhbps.css';
import '../../css/l/lvh_gjuhk.css';
import '../../css/i/iwoyv2bvo.css';
import '../../css/a/avto0dbky.css';
import '../../css/z/zdo7wyief.css';
import '../../css/s/s3a2z59lo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqmhc7b0x"/><path class="s_jemhbps"/><path class="lvh_gjuhk"/><path class="iwoyv2bvo"/><path class="avto0dbky"/><path class="zdo7wyief"/><path clip-rule="evenodd" class="s3a2z59lo"/>`,
		"fallback": "solar:cloud-snowfall-minimalistic-outline",
	});
}

export default Component;
