import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox-vypt0m.css';
import '../../css/i/ihwfk3vlx.css';
import '../../css/u/u1_a_s1mm.css';
import '../../css/g/god76-bpw.css';
import '../../css/y/yk-zceb1c.css';
import '../../css/b/b7pjspbss.css';
import '../../css/o/o6sy6lbwx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox-vypt0m"/><path class="ihwfk3vlx"/><path class="u1_a_s1mm"/><path class="god76-bpw"/><circle class="yk-zceb1c"/><path class="b7pjspbss"/><path class="o6sy6lbwx"/>`,
		"fallback": "selfhst:grafana-alerts-dashboard",
	});
}

export default Component;
