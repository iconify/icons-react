import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5llwvbom.css';
import '../../css/z/z9zjvabag.css';
import '../../css/r/r1bpb3k0n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5llwvbom"/><path class="z9zjvabag"/><path class="r1bpb3k0n"/>`,
		"fallback": "energy-icons:download-48-bold",
	});
}

export default Component;
