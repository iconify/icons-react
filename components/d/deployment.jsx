import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxz1d9zdu.css';
import '../../css/n/nf61udb6z.css';
import '../../css/t/t-y-wfbey.css';
import '../../css/a/aufd3gbbo.css';
import '../../css/s/sn56facnf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxz1d9zdu"/><path class="nf61udb6z"/><path class="t-y-wfbey"/><path class="aufd3gbbo"/><path class="sn56facnf"/>`,
		"fallback": "flat-color-icons:deployment",
	});
}

export default Component;
