import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnd-t-bpb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rnd-t-bpb"/>`,
		"fallback": "streamline-plump:high-speed-train-side-remix",
	});
}

export default Component;
