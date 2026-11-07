import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zenyhg4uf.css';
import '../../css/u/u6-32zbnu.css';
import '../../css/f/fpad1pbpd.css';
import '../../css/k/kh1beibzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zenyhg4uf"/><path class="u6-32zbnu"/><path class="fpad1pbpd"/><path class="kh1beibzl"/>`,
		"fallback": "solar:colour-tuning-bold-duotone",
	});
}

export default Component;
