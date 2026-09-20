import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvgk9mbyi.css';
import '../../css/r/rz6_xdbdi.css';
import '../../css/l/lcanl8bdt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvgk9mbyi"/><path class="rz6_xdbdi"/><path class="lcanl8bdt"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-favorite-rate",
	});
}

export default Component;
