import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uswc0fr3j.css';
import '../../css/n/nu8i0-bfz.css';
import '../../css/d/dqe_68bhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uswc0fr3j wm-k"/><path class="nu8i0-bfz wm-a"/><path class="dqe_68bhs wm-a"/>`,
		"fallback": "withicons-bauhaus:download",
	});
}

export default Component;
