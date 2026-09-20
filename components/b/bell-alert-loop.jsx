import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/a/a9infz.css';
import '../../css/v/vfbpaz.css';
import '../../css/r/rmfyct.css';
import '../../css/r/rgp_dg.css';
import '../../css/w/wboirf.css';
import '../../css/s/so-from-4.css';
import '../../css/t/tr-6vhkny.css';
import '../../css/s/so-to-0.css';
import '../../css/t/tr--mk6os.css';
import '../../css/s/sw-cnj-zb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c a9infz"/><path class="a0m25c vfbpaz"/><path class="a0m25c rmfyct"/><path class="a0m25c rgp_dg"/><path class="a0m25c wboirf"/>`,
		"fallback": "line-md:bell-alert-loop",
	});
}

export default Component;
