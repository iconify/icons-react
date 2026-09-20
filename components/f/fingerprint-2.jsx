import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wjy-l3ujq.css';
import '../../css/y/ymv7k9jac.css';
import '../../css/k/k80w_2bwa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="wjy-l3ujq"/><path class="ymv7k9jac"/><path class="k80w_2bwa"/></g>`,
		"fallback": "streamline-plump-color:fingerprint-2",
	});
}

export default Component;
