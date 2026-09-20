import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi0mne.css';
import '../../css/s/so-from-60.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi0mne"/>`,
		"fallback": "line-md:circle",
	});
}

export default Component;
