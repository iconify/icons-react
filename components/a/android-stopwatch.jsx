import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvv_78wpo.css';
import '../../css/c/cecp9abjx.css';
import '../../css/j/jr0laybrs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvv_78wpo"/><path class="cecp9abjx"/><path class="jr0laybrs"/>`,
		"fallback": "ion:android-stopwatch",
	});
}

export default Component;
