import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytsldx5wo.css';
import '../../css/d/d1bk21bnk.css';
import '../../css/n/nvs_qoklw.css';
import '../../css/c/cplkhfboq.css';
import '../../css/h/h87u4rqnt.css';
import '../../css/w/wyq-ntb0b.css';
import '../../css/a/aky_ykbvv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytsldx5wo"/><path class="d1bk21bnk"/><path class="nvs_qoklw"/><path class="cplkhfboq"/><path class="h87u4rqnt"/><path class="wyq-ntb0b"/><path class="aky_ykbvv"/>`,
		"fallback": "energy-icons:equaliser-48-bold",
	});
}

export default Component;
