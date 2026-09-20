import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z40llcbyn.css';
import '../../css/g/g2_3tpb8y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z40llcbyn"/><path class="g2_3tpb8y"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-setting-computer",
	});
}

export default Component;
