import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpf1zacks.css';
import '../../css/n/nqe79lxrn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpf1zacks"/><path class="nqe79lxrn"/>`,
		"fallback": "streamline-pixel:health-hospital-building-2",
	});
}

export default Component;
