import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0wezz6ua.css';
import '../../css/u/uwzl8fb_s.css';
import '../../css/s/szxap0dkq.css';
import '../../css/b/bpjd7ebcd.css';
import '../../css/o/oi0biibbh.css';
import '../../css/d/dviytx94g.css';
import '../../css/v/v-nan0c6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0wezz6ua"/><path class="uwzl8fb_s"/><path class="szxap0dkq"/><path class="bpjd7ebcd"/><path class="oi0biibbh"/><path class="dviytx94g"/><path class="v-nan0c6d"/>`,
		"fallback": "solar:bill-list-bold-duotone",
	});
}

export default Component;
