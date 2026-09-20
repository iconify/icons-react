import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skbbg-s7m.css';
import '../../css/o/o4ad8gbrb.css';
import '../../css/f/fnw06pb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skbbg-s7m"/><path clip-rule="evenodd" class="o4ad8gbrb"/><path class="fnw06pb2b"/>`,
		"fallback": "stash:image-move-light",
	});
}

export default Component;
