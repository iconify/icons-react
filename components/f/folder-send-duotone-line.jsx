import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukm9jj2re.css';
import '../../css/m/m57h5rbyw.css';
import '../../css/a/ara4m-bwr.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnK9P7b6b"><g class="ukm9jj2re"><path class="m57h5rbyw"/><path class="ara4m-bwr"/></g></mask></defs><path mask="url(#SVGnK9P7b6b)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:folder-send-duotone-line",
	});
}

export default Component;
