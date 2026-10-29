import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw7ndoyex.css';
import '../../css/f/f75k8obyk.css';
import '../../css/j/jdnq1rdcq.css';
import '../../css/t/tycpm5czt.css';
import '../../css/w/wx-cxni8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw7ndoyex wm-shadow"/><path class="f75k8obyk wm-k"/><path class="jdnq1rdcq wm-k"/><path class="tycpm5czt wm-a"/><path class="wm-a wx-cxni8a"/>`,
		"fallback": "withicons-pastel:code",
	});
}

export default Component;
