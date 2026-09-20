import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uecsehbiq.css';
import '../../css/s/s9ro2bzzp.css';
import '../../css/l/ll5_hob1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uecsehbiq"/><path clip-rule="evenodd" class="s9ro2bzzp"/><path clip-rule="evenodd" class="ll5_hob1b"/>`,
		"fallback": "stash:folder-lock",
	});
}

export default Component;
