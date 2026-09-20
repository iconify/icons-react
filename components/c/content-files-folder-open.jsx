import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsldmpb3s.css';
import '../../css/f/f9o_g2bpv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsldmpb3s"/><path class="f9o_g2bpv"/>`,
		"fallback": "streamline-pixel:content-files-folder-open",
	});
}

export default Component;
