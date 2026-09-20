import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fftuk_bwd.css';
import '../../css/a/ascdhq43i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fftuk_bwd"/><path class="ascdhq43i"/>`,
		"fallback": "streamline-pixel:ecology-global-warming-globe",
	});
}

export default Component;
