import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1m411eeg.css';
import '../../css/x/x4pv4iirw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1m411eeg"/><path class="x4pv4iirw"/>`,
		"fallback": "carbon:cost",
	});
}

export default Component;
