import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bybb08b1e.css';
import '../../css/i/ignl7ccte.css';
import '../../css/o/os13rubjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bybb08b1e"/><path class="ignl7ccte"/><path class="os13rubjj"/>`,
		"fallback": "streamline-ultimate:data-file-bars-add-bold",
	});
}

export default Component;
