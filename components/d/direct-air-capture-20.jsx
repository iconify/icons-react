import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv2q0xfqj.css';
import '../../css/o/ory9una0m.css';
import '../../css/o/o9v6t__6i.css';
import '../../css/d/diqcidchs.css';
import '../../css/y/ywcq0jbtm.css';
import '../../css/z/zpa7l_bcn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv2q0xfqj"/><path class="ory9una0m"/><path class="o9v6t__6i"/><path class="diqcidchs"/><path class="ywcq0jbtm"/><path class="zpa7l_bcn"/>`,
		"fallback": "energy-icons:direct-air-capture-20",
	});
}

export default Component;
